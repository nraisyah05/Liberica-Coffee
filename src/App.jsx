import { useRef } from 'react'
import Navbar from './components/Navbar'
import Section1 from './components/Section1'
import Section2 from './components/Section2'
import Section5 from './components/Section5'
import Section4 from './components/Section4'
import Section3 from './components/Section3'
import Serving from './components/Serving'
import { useScrollReveal } from './useScrollReveal'

function App() {
  const pageRef = useRef(null)

  useScrollReveal(pageRef)

  return (
    <div className="app">
      <Navbar />
      <main className="page" ref={pageRef}>
        <Section1 />
        <Section2 />
        <Section5 />
        <Section3 />
        <Serving />
        <Section4 />
      </main>
    </div>
  )
}

export default App
