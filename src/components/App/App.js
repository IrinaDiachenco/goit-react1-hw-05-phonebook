import React, { Component } from 'react';
//import { v4 as uuidv4 } from 'uuid';
//import PropTypes from 'prop-types';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';
import { CSSTransition } from 'react-transition-group';
import styles from './App.module.css';

class App extends Component {
 static defaultProps = {
    name: '',
    number: '',
  };
  state = {
    contacts: [ ],
    filter: '',
  }

  handleAddContact = (newContact) =>
    this.setState(prevState => ({
    contacts: [...prevState.contacts, newContact],
  }))

  handleRemoveContact = (id) => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter((contact) => contact.id !== id)
      }
    })
  }
  
  handleFilterChange = (filter) => this.setState({ filter })
  
  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  }

    componentDidMount() {
    const parsedContacts = JSON.parse(localStorage.getItem('contacts'));
    if (parsedContacts) {
      this.setState(() => {
        return {
          contacts: parsedContacts,
        };
      });
    }  
  }

  componentDidUpdate(prevState) {
    if (prevState.contacts !== this.state.contacts) {
        localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    const { filter } = this.state
    const visibleContacts = this.getVisibleContacts();
    return (
      <div className={styles.container}>
      <CSSTransition
        in={true}
        appear={true}
        classNames={styles}
        timeout={500}
        unmountOnExit
        >
        <h2 className={styles.tittle}>Phonebook</h2>
      </CSSTransition>

      <ContactForm onAdd={this.handleAddContact} contacts={this.state.contacts}/>
      <div className={styles.filter}>
        <h2>find contact</h2>
      <Filter filter={filter} onChange={this.handleFilterChange} />
        </div>
      <ContactList contacts={visibleContacts} onRemove={this.handleRemoveContact} />
  </div>
    );
  }
}

export default App;