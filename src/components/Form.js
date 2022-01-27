import React, { Component } from "react";
import { nanoid } from "nanoid";
import css from "./Form.module.css";
import PropTypes from "prop-types";
export default class Form extends Component {
  state = {
    name: "",
    number: "",
  };
  nameInputId = nanoid();
  numberInputId = nanoid();
  handleInputChange = (event) => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state);

    this.reset();
  };
  reset = () => {
    this.setState({
      name: "",
      number: "",
    });
  };
  render() {
    const { name, number } = this.state;
    return (
      <form className={css.form} onSubmit={this.handleSubmit}>
        <label className={css.form__label} htmlFor={this.nameInputId}>
          Name &nbsp;&nbsp;
          <input
            className={css.form__input_name}
            type="text"
            value={name}
            onChange={this.handleInputChange}
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            id={this.nameInputId}
          />
        </label>
        <label className={css.form__label} htmlFor={this.numberInputId}>
          Number &nbsp;&nbsp;
          <input
            className={css.form__input}
            onChange={this.handleInputChange}
            value={number}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            id={this.numberInputId}
          />
        </label>
        <button className={css.form__btn} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}
Form.protoTypes = { onSubmit: PropTypes.func.isRequired };
