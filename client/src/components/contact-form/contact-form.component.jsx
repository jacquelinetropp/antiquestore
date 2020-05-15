import React from "react";

import "./contact-form.styles.scss";

import FormInput from "../form-input/form-input.component";

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
    };
  }
  onNameChange(event) {
    this.setState({ name: event.target.value });
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  onMessageChange(event) {
    this.setState({ message: event.target.value });
  }

  handleSubmit(event) {}

  render() {
    return (
      <div className="contact">
        <h2 className="title">Contact Us</h2>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="name"
            type="text"
            handleChange={this.onNameChange}
            value={this.state.name}
            label="Full Name"
            required
          />
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            handleChange={this.onEmailChange}
            label="E-mail"
            required
          />
          <FormInput
            name="message"
            type="text"
            value={this.state.message}
            handleChange={this.onMessageChange}
            label="Message"
            required
          />
        </form>
      </div>
    );
  }
}

export default ContactForm;
