import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar/Navbar"
import NavbarBanner from "./components/Navbar/NavbarBanner"

function App() {

  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <NavbarBanner />
      <Hero />
    </main>
  )
}

export default App
