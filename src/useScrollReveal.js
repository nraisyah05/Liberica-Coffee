import { useEffect } from 'react'

const revealThreshold = 0.15
const tallTargetThreshold = 0.05
const staggerInterval = 140

export function useScrollReveal(pageRef) {
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return

    const page = pageRef.current
    const targets = page.querySelectorAll('[data-reveal]')
    const motion = window.matchMedia('(prefers-reduced-motion: no-preference)')

    const revealObserver = new IntersectionObserver(entries => {
      const groupCounts = new Map()

      for (const entry of entries) {
        const { target, isIntersecting, intersectionRatio, boundingClientRect, rootBounds } = entry

        // The first observation leaves already visible content in place during hydration.
        if (!target.dataset.revealState) {
          target.dataset.revealState = isIntersecting ? 'shown' : 'pending'
          continue
        }

        const threshold = boundingClientRect.height > rootBounds?.height
          ? tallTargetThreshold
          : revealThreshold
        if (!isIntersecting || intersectionRatio < threshold || target.dataset.revealState !== 'pending') continue

        const group = target.parentElement
        if (group?.hasAttribute('data-reveal-group')) {
          const index = groupCounts.get(group) ?? 0
          target.style.setProperty('--reveal-delay', `${index * staggerInterval}ms`)
          groupCounts.set(group, index + 1)
        }

        target.dataset.revealState = 'entering'
      }
    }, {
      // Exclude the area behind the sticky header when returning from below.
      rootMargin: '-96px 0px 0px',
      threshold: [0, tallTargetThreshold, revealThreshold],
    })

    // Wait until the element leaves a padded viewport so resetting its transform
    // cannot retrigger the reveal near an edge.
    const resetObserver = new IntersectionObserver(entries => {
      for (const { target, isIntersecting } of entries) {
        if (!isIntersecting && target.dataset.revealState) target.dataset.revealState = 'pending'
      }
    }, { rootMargin: '64px 0px' })

    const stop = () => {
      revealObserver.disconnect()
      resetObserver.disconnect()
      for (const target of targets) {
        delete target.dataset.revealState
        target.style.removeProperty('--reveal-delay')
      }
    }

    const update = () => {
      if (!motion.matches) {
        stop()
        return
      }

      for (const target of targets) {
        revealObserver.observe(target)
        resetObserver.observe(target)
      }
    }

    const showFocusedTarget = event => {
      const target = event.target.closest('[data-reveal]')
      if (target?.dataset.revealState) target.dataset.revealState = 'shown'
    }

    update()
    motion.addEventListener?.('change', update)
    page.addEventListener('focusin', showFocusedTarget)
    return () => {
      stop()
      motion.removeEventListener?.('change', update)
      page.removeEventListener('focusin', showFocusedTarget)
    }
  }, [pageRef])
}
