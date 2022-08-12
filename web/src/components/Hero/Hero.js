const Hero = () => {
  return (
    <div className="mt-36">
        <div className="">
          <div id="main-title" className="mb-8">
            <h1 className="text-[100px] font-bold leading-none">
              <span className="block">Alexandre</span>
              <span className="block">Full Stack Dev</span>
            </h1>
          </div>
          <div id="hero-desc" className="lg:w-2/5 md:w-3/5 sm:w-full">
            <p className="pb-5">
              Hey salut👋!<br/>
              Je m'appel Alexandre et je suis développeur full-stack basé à Aix-les-bains en Savoie⛰. <br/>
              </p>
            <p className="pb-5">
              Je suis passionné par le développement web 🐱‍💻 et je suis à la recherche de nouveau défis à relever.
            </p>
            <p><a href="#" className="block uppercase link bg-light-gradient bg-clip-text font-semibold">Contactez-moi <i className="fa-solid fa-arrow-right-long"></i></a></p>
          </div>
        </div>
      <div className="absolute right-0 top-20 w-3/5 z-[-1]">
        <img src="/img/hero.svg" alt="Hero image"/>
      </div>
    </div>
  )
}

export default Hero
