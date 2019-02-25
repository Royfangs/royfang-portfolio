import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from '../../axiosSet';
import './Contact.scss';

class Contact extends Component {

  state = {
    comment: {
      name: '',
      email: '',
      message: ''
    }
  }

  nameChangeHandler = (e) => {
    this.setState({
      comment: {
        ...this.state.comment,
        name: e.target.value
      }
    });
    console.log(e.target.value)
  }

  emailChangeHandler = (e) => {
    this.setState({
      comment: {
        ...this.state.comment,
        email: e.target.value
      }
    });
  }

  messageChangeHandler = (e) => {
    this.setState({
      comment: {
        ...this.state.comment,
        message: e.target.value
      }
    });
  }

  postComment = () => {
    const comment = {
      name: this.state.comment.name,
      email: this.state.comment.email,
      message: this.state.comment.message
    };
    if (!comment.name && !comment.email) {
      return;
    } else {
      axios.post('/comment.json', comment)
      .then(response => console.log(response))
      .catch(err => console.log(err));
    }
  }

  // PostForm = () => {
  //   axios.post('/message.json')
  // }

  render () {
    return (
      <div className="Contact">
        <h1 className="Contact__heading">Contact</h1>
        <FontAwesomeIcon className="Contact__icon" icon="envelope" />
        <h3 className="Contact__subtitle">If you have any questions or want to collaborate, welcome to send message.</h3>
        <form className="Contact__form">
          <input className="Contact__input" type="text" name="name" placeholder="Name" onChange={(e) => this.nameChangeHandler(e)} required/>
          <input className="Contact__input" type="email" name="email" placeholder="Email" onChange={(e) => this.emailChangeHandler(e)} required/>
          <textarea className="Contact__input" name="message" cols="30" rows="10" placeholder="Your message" onChange={(e) => this.messageChangeHandler(e)}></textarea>
          <button className="Contact__button" type="button" onClick={this.postComment}>Submit</button>
        </form>
      </div>
    );
  }
}

export default Contact;