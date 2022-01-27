import React from "react";
import ContactListItem from "./ContactListItem";
import css from "./ContactsList.module.css";
import PropTypes from "prop-types";
const ContactsList = ({ contacts, onDelContact }) => {
  return (
    <>
      <ul className={css.contact__list}>
        {contacts.map(({ id, name, number }) => (
          <li className={css.contact__item} key={id}>
            <ContactListItem
              id={id}
              name={name}
              number={number}
              onDelContact={onDelContact}
            />
          </li>
        ))}
      </ul>
    </>
  );
};
export default ContactsList;
ContactsList.protoTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};
