import React, { Component } from 'react';
import {Consumer} from "../../context";
import TextInputFields from '../layout/TextInputFields';
import axios from 'axios';

class AddContact extends Component {
    state = {
        name: '',
        email: '',
        phone: '',
        id: 0,
        errors: {}
    }
    setContactId = (id, e) => {
        this.setState({
            id: id + 1
        });
    }
    onInputChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        });
    }
    onSubmitForm = (dispatch, e) => {
        e.preventDefault();
        const { id, name, email, phone } = this.state;
        // check errors
        if (email === '') {
            this.setState({
                errors: { email: 'Email is Required'}
            });
            return;
        }
        if (name === '') {
            this.setState({
                errors: { name: 'Name is Required'}
            });
            return;
        }
        if (phone === '') {
            this.setState({
                errors: { phone: 'Phone is Required'}
            });
            return;
        }
        const newContact = {
            name,
            email,
            phone
        };
        //console.log(newContact);
        axios.post('https://jsonplaceholder.typicode.com/users', newContact)
            .then((res) => {
                console.log(res);
                dispatch({type: 'ADD_CONTACT', payload: res.data });
            });

        this.setState({
            name: '',
            email: '',
            phone: '',
            id: 0,
            errors: {}
        });
        this.props.history.push('/');
    }
    render() {
        const { name, email, phone, errors } = this.state;
        return (
            <Consumer>
                {value => {
                    const { dispatch } = value; console.log(value.contacts.length);
                    this.setContactId.bind(this, value.contacts.length);
                    return (
                        <div className="card mb-3">
                            <div className="card-header">Add Contact</div>
                            <div className="card-body">
                                <form onSubmit={this.onSubmitForm.bind(this, dispatch)}>
                                    <TextInputFields label="Name" name="name" value={name} placeholder="Name" onChange={this.onInputChange} error={errors.name}/>
                                    <TextInputFields label="Email" name="email" value={email} placeholder="Email Address" type='email' onChange={this.onInputChange} error={errors.email} />
                                    <TextInputFields label="Phone" name="phone" value={phone} placeholder="Phone Number" onChange={this.onInputChange} error={errors.phone} />
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </form>
                            </div>
                        </div>
                    )
                }}
            </Consumer>
        )
    }
}

export default AddContact;