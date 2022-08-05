const Hero = () => {
  return (
    <div className="mt-20 relative">
        <div className="">
          <div id="main-title" className="mb-8">
            <h1 className="text-[100px] font-bold leading-none">
              <span className="block">Alexandre</span>
              <span className="block">Full Stack Dev</span>
            </h1>
          </div>
          <div id="hero-desc" className="w-2/5">
            <p className="pb-5">
              Hey salut👋! Moi c'est Alexandre, jeune développeur basée à Aix-les-bains en Savoie⛰. <br/>
              Je suis passionné par le développement web 🐱‍💻 et je suis à la recherche de nouveau défis à relevés.
            </p>
            <p><a href="#" className="block uppercase link bg-light-gradient bg-clip-text font-semibold">Contactez-moi <i className="fa-solid fa-arrow-right-long"></i></a></p>
          </div>
        </div>
      <div className="absolute right-0 top-[-30px] w-3/5 z-[-1]">
        <img src="/img/hero.svg" alt=""/>
      </div>
    </div>
  )
}

export default Hero
