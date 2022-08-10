const Navbar = () => {
  return (
    <div className="grid grid-cols-8 gap-5 place-content-center place-items-center">
      <div className="col-span-2">
        <div className="logo">
          <p><span className=" mr-2 logo-bullet inline-flex items-center justify-center rounded-full bg-light-gradient w-[40px] h-[40px] leading-none text-white font-semibold">AD</span>Avel Development</p>
        </div>
      </div>
      <div className="col-span-5">
        <div className="nav-items flex justify-center gap-16">
          <div className="nav-item">
            <a href="#">Home</a>
          </div>
          <div className="nav-item">
            <a href="#about">About</a>
          </div>
          <div className="nav-item">
            <a href="#services">Services</a>
          </div>
          <div className="nav-item">
            <a href="#portfolio">Portfolio</a>
          </div>
        </div>
      </div>
      <div className="col-span-1">
        <div className="nav-items">
          <div className="nav-item">
            <a href="#contact" className="py-2 px-5 bg-light-gradient transition-all duration-300 border-2 border-transparent rounded-full leading-none ">Contact</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
