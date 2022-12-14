const PortfolioCard = (props) => {
  return (
    <div data-aos={'zoom-out'} data-aos-delay={props.delay} className={`bg-light-gradient rounded-xl portfolio-card ${props.class}`} data-target={props.target}>
      <div className="">
        <img src={props.img} alt={props.alt} className='rounded-t-xl'/>
      </div>
      <div className="body py-8 px-8">
        <h3 className='font-bold text-2xl mb-3'>{props.title}</h3>
        <p>{props.description}</p>
      </div>
    </div>
  )
}

export default PortfolioCard
