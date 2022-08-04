const Navbar = () => {
  return (
    <div className="grid grid-cols-7">
      <div className="col-span-1">
        <div className="logo">
          <p><span className=" mr-2 logo-bullet inline-flex items-center justify-center rounded-full bg-light-gradient w-[40px] h-[40px] leading-none text-white font-semibold">AD</span>Avel Development</p>
        </div>
      </div>
      <div className="col-span-5">
        <div className="nav-items flex justify-center gap-2">
          <div className="nav-item">
            <a href="#">Home</a>
          </div>
          <div className="nav-item">
            <a href="#">About</a>
          </div>
          <div className="nav-item">
            <a href="#">Services</a>
          </div>
          <div className="nav-item">
            <a href="#">Portfolio</a>
          </div>
        </div>
      </div>
      <div className="col-span-1">
        <div className="nav-items">
          <div className="nav-item">
            <a href="#">Contact</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
