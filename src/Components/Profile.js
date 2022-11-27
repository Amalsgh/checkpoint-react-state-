import React, { Component } from 'react'
import './Profile.css'
import Profilephoto from './Assets/amal.jpg'

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.person = {
      Fullname : "SGHAIER Amal" ,
      Bio : "Student" ,
      Profession : "Web Developer" , 
    };

    this.state={count : 0}
  }
  componentDidMount(){
    setInterval(()=>{
      this.setState( prevState => ({
        count : prevState.count+0.5
      }))
    }
    ,1000)
  }
  
  render() {
    return (
      <div>
        <h2>{this.person.Fullname}</h2>
        <h2>{this.person.Bio}</h2>
        <h2>{this.person.Profession}</h2>
        <h2>{this.state.count}</h2>
        <img src={Profilephoto} alt='pic' />
      </div>
    )
  }
}

