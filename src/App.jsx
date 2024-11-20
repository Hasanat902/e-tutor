import ChooseUs from "./components/ChooseUs/ChooseUs"
import Counter from "./components/Counter/Counter"
import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar/Navbar"
import NavbarBanner from "./components/Navbar/NavbarBanner"
import Img1 from "./assets/banner1.png"
import Img2 from "./assets/banner2.png"
import Banner from "./components/Banner/Banner"
import Subject from "./components/Subject/Subject"
import Testimonials from "./components/Testimonials/Testimonials"
import Footer from "./components/Footer/Footer"

const BannerData = {
  image: Img1,
  tag: "CUSTOMIZE WITH YOUR SCHEDULE",
  title: "Personalized Professional Online Tutor on Your Schedule",
  subtitle:
    "Our scheduling system allows you to select based on your free time. Lorem ipsum demo text for template. Keep track of your students class and tutoring schedules, and never miss your lectures. The best online class scheduling system with easy accessibility.Lorem ipsum is a placeholder text commonly used to demonstrate the visual form",
  link: "#",
};

const BannerData2 = {
  image: Img2,
  tag: "CUSTOMIZE WITH YOUR SCHEDULE",
  title: "Talented and Qualified Tutors to Serve You for Help",
  subtitle:
    "Our scheduling system allows you to select based on your free time. Lorem ipsum demo text for template. Keep track of your students class and tutoring schedules, and never miss your lectures. The best online class scheduling system with easy accessibility. Lorem ipsum is a placeholder text commonly used",
  link: "#",
};


function App() {

  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <NavbarBanner />
      <Hero />
      <Counter />
      <ChooseUs />
      <Banner {...BannerData} />
      <Banner {...BannerData2} reverse={true} />
      <Subject />
      <Testimonials />
      <Footer />
    </main>
  )
}

export default App
