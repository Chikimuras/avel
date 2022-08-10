const ServiceCard = (props) => {
  return (
    <div className={`services-card bg-light-gradient rounded-xl py-12 px-8 ${props.class}`}>
      <div className="flex flex-col justify-center items-center mb-8">
        <div className="icon mb-3"><i className={`text-4xl fas ${props.icon}`}></i></div>
        <div className="title font-black text-3xl"><h2 className='text-center'>{props.title}</h2></div>
      </div>
      <div className="body text-center">
        <p>{props.description}</p>
      </div>
    </div>
  )
}

export default ServiceCard
