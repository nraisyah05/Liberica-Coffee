import { useEffect, useRef, useState } from 'react'

const activationBuffer = 16
const settleDelay = 180

export function useSectionNavigation(headerRef, links) {
  const [active, setActive] = useState(null)
  const selectRef = useRef(null)

  useEffect(() => {
    const header = headerRef.current
    const root = document.documentElement
    const sections = links.map(([, hash]) => ({ hash, element: document.getElementById(hash.slice(1)) }))
    let headerHeight = 0
    let activeIndex = -1
    let anchorIndex = -1
    let anchorScrollY = 0
    let navigating = false
    let frame = 0
    let settleTimer = 0

    const activate = index => {
      activeIndex = index
      setActive(sections[index].hash)
    }

    const syncActive = () => {
      frame = 0
      if (navigating) return

      const readingLine = headerHeight + (window.innerHeight - headerHeight) * .3
      const positions = sections.map(({ element }) => element.getBoundingClientRect().top)
      const index = Math.max(0, positions.findLastIndex(top => top <= readingLine))
      if (activeIndex >= 0 && index > activeIndex && positions[index] > readingLine - activationBuffer) return
      if (index < activeIndex && positions[activeIndex] < readingLine + activationBuffer) return
      if (index !== activeIndex) activate(index)
    }

    const scheduleSync = () => {
      if (!frame) frame = requestAnimationFrame(syncActive)
    }

    const measureHeader = () => {
      headerHeight = header.getBoundingClientRect().height
      root.style.setProperty('--header-height', `${headerHeight}px`)

      if (anchorIndex >= 0) {
        sections[anchorIndex].element.scrollIntoView({
          block: 'start',
          behavior: navigating ? 'auto' : 'instant',
        })
        if (!navigating) anchorScrollY = window.scrollY
      }

      scheduleSync()
    }

    const resumeSync = () => {
      clearTimeout(settleTimer)
      navigating = false

      if (anchorIndex >= 0) {
        const targetTop = sections[anchorIndex].element.getBoundingClientRect().top
        if (Math.abs(targetTop - headerHeight) <= 1) anchorScrollY = window.scrollY
        else anchorIndex = -1
      }

      scheduleSync()
    }

    const waitForScroll = () => {
      clearTimeout(settleTimer)
      settleTimer = window.setTimeout(resumeSync, settleDelay)
    }

    const onScroll = () => {
      if (navigating) {
        waitForScroll()
        return
      }

      if (Math.abs(window.scrollY - anchorScrollY) > 1) anchorIndex = -1
      scheduleSync()
    }

    const interruptNavigation = () => {
      anchorIndex = -1
      resumeSync()
    }

    const onHashChange = () => {
      if (anchorIndex >= 0 && sections[anchorIndex].hash !== window.location.hash) interruptNavigation()
    }

    selectRef.current = hash => {
      const index = sections.findIndex(section => section.hash === hash)
      if (index < 0) return

      // Keep the selected link highlighted while native smooth scrolling passes other sections.
      anchorIndex = index
      navigating = true
      activate(index)
      waitForScroll()
    }

    const resizeObserver = typeof ResizeObserver === 'function' ? new ResizeObserver(measureHeader) : null
    resizeObserver?.observe(header)
    measureHeader()
    window.addEventListener('resize', measureHeader)
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('wheel', interruptNavigation, { passive: true })
    window.addEventListener('touchmove', interruptNavigation, { passive: true })
    window.addEventListener('hashchange', onHashChange)

    return () => {
      selectRef.current = null
      resizeObserver?.disconnect()
      window.removeEventListener('resize', measureHeader)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('wheel', interruptNavigation)
      window.removeEventListener('touchmove', interruptNavigation)
      window.removeEventListener('hashchange', onHashChange)
      clearTimeout(settleTimer)
      cancelAnimationFrame(frame)
      root.style.removeProperty('--header-height')
    }
  }, [headerRef, links])

  return [active, hash => selectRef.current?.(hash)]
}
