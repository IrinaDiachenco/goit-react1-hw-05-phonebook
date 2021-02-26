import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
//import ContactList from '../ContactList';

class ContactForm extends Component {
  static propTypes = {
    contacts: PropTypes.array.isRequired,
    filter: PropTypes.string,
  };

    state = {
        name: "",
        phone: "",
        //contacts: [],
    };

    handleChangeForm = ({ target }) => {
        const { name, value } = target
        this.setState({ [name]: value })
    };

    handleFormSubmit = (e) => {
        e.preventDefault()

        const { name, phone } = this.state;
        const { onAdd } = this.props;
        const isValidateForm = this.validateForm()

        if (!isValidateForm)
            onAdd({ id: uuidv4(), name, phone })
            this.resetForm()    
    };

    validateForm = () => {
        const { name, phone } = this.state;
        const { contacts } = this.props
        const isExistContact = !!contacts.find((contact) => contact.name === name);
        if (!name || !phone) {
            alert('Some filed is empty')
            return true
        }
        if (isExistContact) {
            alert('Contact is already exist');
            return true
        }
    }   
        //return onCheckUnique = (name) => {
            //isExistContact && alert('Contact is already exist')
            //return !isExistContact   
        //}

    resetForm = () => {
        this.setState({ name: '', phone: '' });
    };

    render() {
        const { name, phone } = this.state;
        //const { contacts } = this.props;
        return (
            <form onSubmit={this.handleFormSubmit}>
                <input type="text" name="name" placeholder="Enter name" value={name} onChange={this.handleChangeForm}/>
                <input type="tel" name="phone" placeholder="Enter phone number" value={phone} onChange={this.handleChangeForm} />
                <button type='submit'>Add Contact</button>    
            </form>
        )
    }
}

ContactForm.propTypes = {
        name: PropTypes.string,
        phone: PropTypes.number,
        onCheckUnique: PropTypes.func,
};

export default ContactForm;