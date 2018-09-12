import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Contact from './Contact';
import {Consumer} from "../../context";

class Contacts extends  Component {
    render() {
        return (
            <Consumer>
                {value => {
                    return (
                        <React.Fragment>
                            <h1 className="display-4 mb-4">
                                <span>Contact</span> List
                            </h1>
                            {
                                value.contacts.map(contact => (
                                    <Contact key={contact.id} contact={contact} />
                                ))
                            }
                        </React.Fragment>
                    )
                }}
            </Consumer>
        )
    }
}

export default Contacts;