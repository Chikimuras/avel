const Logo = (props) => {

  return (
    <div className="logo-container opacity-20 hover:opacity-100 transition-opacity relative">
      <img src={props.img} className="tech-logo" alt={props.alt} width='100'/>
    </div>
  )

}

export default Logo
