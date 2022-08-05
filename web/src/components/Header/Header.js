import Navbar from "src/components/Navbar/Navbar";
import Hero from "src/components/Hero/Hero";

const Header = () => {
  return (
    <div className="header my-5">
      <div className="navbar">
      <Navbar />
      </div>
      <div className="hero">
        <Hero />
      </div>
    </div>
  )
}

export default Header
