import ChooseUs from "./components/ChooseUs/ChooseUs"
import Counter from "./components/Counter/Counter"
import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar/Navbar"
import NavbarBanner from "./components/Navbar/NavbarBanner"

function App() {

  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <NavbarBanner />
      <Hero />
      <Counter />
      <ChooseUs />
    </main>
  )
}

export default App
