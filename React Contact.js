import React, { Component } from 'react';
import glen from './glen.jpg';
console.log(glen);
class Contact extends Component {
  render() {
    return (
        <div>
          <img src={glen} alt="logo"/>
          <h3>Email:ranjan@glenwoodsystems.com</h3>
        </div>
    );
  }
}

export default Contact;
