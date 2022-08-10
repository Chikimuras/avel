import {Component} from "react";

class Logo extends Component {
  constructor(props) {
    super(props);
    this.state = {img: props.img, alt: props.alt};
  }

  render() {
    return (
      <div className="logo-container opacity-20 hover:opacity-100 transition-opacity relative">
        <img src={this.state.img} className="tech-logo" alt={this.state.alt} width='100'/>
      </div>
    )
  }
}
export default Logo
