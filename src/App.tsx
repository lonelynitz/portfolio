import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'

const Divider = () => (
  <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 1.5rem" }}>
    <div style={{ height: 1, background: "linear-gradient(90deg, transparent, #1e1e2e, transparent)" }} />
  </div>
);

function App() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 60 }}>
        <header><Hero /></header>
        <Divider />
        <About />
        <Divider />
        <Skills />
        <Divider />
        <Experience />
        <Divider />
        <Projects />
        <Divider />
        <footer><Contact /></footer>
      </main>
      <div style={{ textAlign: "center", padding: "2rem 1rem", color: "#2e2e3e", fontSize: "0.8rem", borderTop: "1px solid #1e1e2e" }}>
        © 2026 Vasanth Murugesan
      </div>
    </>
  )
}

export default App
