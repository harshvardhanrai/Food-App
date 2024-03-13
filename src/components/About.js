import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
   
  constructor(props) {
    super(props);

  }

  componentDidMount() {

    // API CALL
  }

  render() {

    return (
      <div className="items-center justify-center">
        <h2>About the Class Components</h2>
        <h3>Namaste React</h3>
        <UserClass name={"First Name"} location={"Varanasi"} />
        </div>
    );

  }
}

export default About;