import React from "react";
import css from "./Filter.module.css";
import PropTypes from "prop-types";

const Filter = ({ htmlFor, onChange, value, id }) => {
  return (
    <label className={css.filter__label} htmlFor={htmlFor}>
      Find contacts by name &nbsp;
      <input
        className={css.filter__input}
        onChange={onChange}
        value={value}
        type="text"
        name="filter"
        title="Enter name"
        required
        id={id}
      />
    </label>
  );
};
export default Filter;
Filter.protoType = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  htmlFor: PropTypes.string.isRequired,
};
