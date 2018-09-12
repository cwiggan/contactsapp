import React, { Component } from 'react'
import PropTypes from 'prop-types';
import {Consumer} from "../../context";
import { Link } from "react-router-dom";
import axios from 'axios';

class Contact extends  Component {
    state = {
        showDetails: false
    };
    showContactClick = (e) => {
      this.setState({
          showDetails: !this.state.showDetails
      });
    };
    onDeleteClick = (id, dispatch) => {
        axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((res) => {
                //console.log(res);
                dispatch({type:'DELETE_CONTACT', payload: id});
            });
    };
    render() {
        const {id, name, email, phone } = this.props.contact;
        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;
                    return (
                        <div className="card card-body mb-3 p-0">
                            <div className="card-header">
                                <h3 className="float-left">
                                    {name} 
                                    <i onClick={this.showContactClick} className="fas fa-sort-down" style={{ cursoe: 'pointer' }}></i>
                                </h3>
                                <div className="float-righ">
                                        <button  onClick={this.onDeleteClick.bind(this, id, dispatch)} type="button" className="btn btn-primary btn-sm"><i className="fas fa-times ml-auto" style={{ cursoe: 'pointer' }}></i></button> 
                                         
                                         <Link to={`edit/${id}`}>
                                            <button className="btn btn-primary btn-sm"><i className="fas fa-pencil-alt"></i></button>
                                         </Link>
                                </div>
                            </div>
                            {this.state.showDetails ? (
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">Email: {email}</li>
                                    <li className="list-group-item">Phone: {phone}</li>
                                </ul>
                            ) : null}
                        </div>
                    )
                }}
            </Consumer>
        )
    }
}

Contact.propTypes = {
    name: PropTypes.string,
    email:PropTypes.string,
    phone: PropTypes.string,
};

export default Contact;