import React from "react";

class Form extends React.Component {
  state = {
    firstName: "",
    email: "",
    message: "",
    select: "",
    subscription: false,
    gender: ""
  };

  handleChange = (event) => {
    /*this.setState({firstName: event.target.value}) 
отслеживаем в этой одной функции состояние 2 инпутов с []
*/
    this.setState({ [event.target.name]: event.target.value });
  };

  handleCheckboxChange = (event) => {
    this.setState({ [event.target.name]: event.target.checked });
  };

  /*валидация формы*/
  validateName = () => {
    if (this.state.firstName.length < 4) {
      alert("Your first name can't be less than 4 letters");
    }
  };

  validateEmail = () => {
    const rr = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    console.log(this.state.email, rr.test(this.state.email));

    if (!rr.test(this.state.email)) {
      alert("email is not valid");
    }
  };

  render() {
    const {
      firstName,
      email,
      message,
      select,
      subscription,
      gender
    } = this.state;

    return (
      <div>
        <input
          type="text"
          name="firstName"
          placeholder="firstName"
          value={firstName}
          onChange={this.handleChange}
          onBlur={this.validateName}
        />
        <br />
        <br />
        <input
          type="email"
          name="email"
          placeholder="email"
          value={email}
          onChange={this.handleChange}
          onBlur={this.validateEmail}
        />
        <p>
          Все что написано в эту форму, записывается в состояние state,
          firstName в функции handleChange
        </p>
        <p>
          Управление компонентом форма через состояние state, запись в
          переменных введенных в форму значений. Валидация формы.
        </p>
        <textarea name="message" value={message} onChange={this.handleChange} />
        <br />
        <select name="select" value={select} onChange={this.handleChange}>
          <option value="" disabled></option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <br />
        <label>
          <input
            type="checkbox"
            name="subscription"
            checked={subscription}
            onChange={this.handleCheckboxChange}
          />
          Subscription
        </label>
        <br />
        <input
          type="radio"
          name="gender"
          value="male"
          onChange={this.handleChange}
          checked={gender === "male"}
        />{" "}
        Male
        <input
          type="radio"
          name="gender"
          value="female"
          onChange={this.handleChange}
          checked={gender === "female"}
        />{" "}
        Female
      </div>
    );
  }
}

export { Form };
