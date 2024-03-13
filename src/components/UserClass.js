import React from "react";
class UserClass extends React.Component {
  
  constructor(props) {
    super(props);

    this.state ={
      userInfo: {
        name: "Dummy Name",
        location: "Default Location"
      },
    }

  }

  async componentDidMount() {
    // API CALL HERE

    const data = await fetch("https://api.github.com/users/harshvardhanrai");

    const json = await data.json();

    this.setState({
      userInfo: json,
    })

    console.log(json);
  }

  render() {
    const {name, location, avatar_url} = this.state.userInfo;

    return (
      <div className = "user-card w-[80vw] ml-28 mt-10 border border-violet-700 p-4 flex items-center justify-between">
        <img src={avatar_url}></img>
      <h2>Name: {name}</h2>
      <h3>Location: {location}</h3>
      <h4>Contact: +91 9876543210</h4>
      </div>
    )

}
}
export default UserClass;