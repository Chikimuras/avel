const SocialNetworkIcon = (props) => {
  return (
    <div className={`social-net-icon ${props.class}`}>
      <a href={props.href} target={props.target}>
        <i className={`text-5xl ${props.icon} ${props.iconStyle}`}></i>
      </a>
    </div>
  )
}

export default SocialNetworkIcon
