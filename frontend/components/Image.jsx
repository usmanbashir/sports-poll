import React from "react";

let getState = () => {
  return {src: ""};
}

export default class Image extends React.Component {
  constructor(props) {
    super(props);
    this.state = getState();
  }

  componentDidMount() {
    this.setState({src: this.props.src});
  }

  handleError() {
    this.setState({src: "assets/images/error.png"});
  }

  render() {
    return(
      <img className={this.props.className}
           src={this.state.src}
           onError={this.handleError.bind(this)} />
    );
  }
}
