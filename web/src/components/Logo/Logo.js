import {Component} from "react";

class Logo extends Component {
  constructor(props) {
    super(props);
    this.state = {img: props.img, alt: props.alt, delay: props.delay};
  }

  render() {
    return (
      <div data-aos={"flip-up"} data-aos-delay={this.state.delay} className="logo-container opacity-20 hover:opacity-100 transition-opacity relative">
        <img src={this.state.img} className="tech-logo" alt={this.state.alt} width='100'/>
      </div>
    )
  }
}
export default Logo
