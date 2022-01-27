import React from "react";
import css from "./ContactsListItem.module.css";
import PropTypes from "prop-types";
const ContactListItem = ({ id, name, number, onDelContact }) => {
  return (
    <>
      {name}: &nbsp; {number}
      <button
        className={css.del__btn}
        type="button"
        onClick={() => onDelContact(id)}
      >
        Delete
      </button>
    </>
  );
};
export default ContactListItem;
ContactListItem.protoTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelContact: PropTypes.func.isRequired,
};
