import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styles from './ContactList.module.css';

const ContactListItem = ({ id, name, phone, onRemove }) => {
    return (
        <li key={id}>
            {name}: {phone} <button className={styles.button} id={id} onClick={() => onRemove(id)}>x</button>
        </li>
    
    )
};

const ContactList = ({ contacts, onRemove, id }) => {
    if (contacts.length === 0) return null
    return (
        <TransitionGroup component="ul" className={styles.list}>
            {contacts.map(contacts =>
            <CSSTransition
                key={id}
                classNames={styles}
                timeout={300}
            >
                <ContactListItem {...contacts} onRemove={onRemove} />
            </CSSTransition>
            )}
        </TransitionGroup>
    )
};
ContactListItem.propTypes = {
        //id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        phone: PropTypes.string.isRequired,
        onRemove: PropTypes.func.isRequired,
        contacts: PropTypes.array,
};
export default ContactList;