import React, {Component} from "react";
import {Consumer} from "../../context";
// import uuid from "uuid";
import TextInputGroup from "../layout/TextInputGroup";
import axios from 'axios';

export default class EditContact extends Component {
    state = {
        name: "",
        email: "",
        phone: "",
        address: "",
        errors: {}
    };

    async componentDidMount() {
        const {id} = this.props.match.params;
        const res = await axios.get(
            `https://jsonplaceholder.typicode.com/users/${id}`
        );

        const contact = res.data;

        this.setState({
            name: contact.name,
            email: contact.email,
            phone: contact.phone,
        })
    }

    onChange = e => {
        this.setState({[e.target.name]: e.target.value});
    };

    onSubmit = async (dispatch, e) => {
        e.preventDefault();
        console.log(this.state);
        const {name, email, phone, address} = this.state;

        // Check for errors
        // Urutan berpengaruh pas pengecekan wkwkwk
        if (name === '') {
            this.setState({errors: {name: 'Name is required'}});
            return;
        }
        if (email === '') {
            this.setState({errors: {email: 'Email is required'}});
            return;
        }
        if (phone === '') {
            this.setState({errors: {phone: 'Phone is required'}});
            return;
        }

        // if(address === ''){
        //     this.setState({errors : {address : 'Address is required'}});
        //     return;
        // }

        // New Contact object
        const updContact = {
            // id: uuid(),
            name,
            email,
            phone
            // ,address
        };

        const {id} = this.props.match.params;

        const res = await axios.put(
            `https://jsonplaceholder.typicode.com/users/${id}`,
            updContact
        );

        // dispatch to context
        dispatch({type: "UPDATE_CONTACT", payload: res.data});

        // Clear the state
        this.setState({
            // name: "",
            // email: "",
            // phone: "",
            // address: "",
            errors: {}
        });

        // send to the contact list component
        this.props.history.push('/');
    };

    render() {
        const {name, email, phone, errors} = this.state;

        return (
            <Consumer>
                {value => {
                    const {dispatch} = value;
                    return (
                        <div className="card mb-3">
                            <div className="card-header">Edit Contact</div>

                            <div className="card-body">
                                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                                    {/*<div className="form-group">*/}
                                    {/*<label htmlFor="name">Name</label>*/}
                                    {/*<input*/}
                                    {/*type="text"*/}
                                    {/*name="name"*/}
                                    {/*className="form-control form-control-lg"*/}
                                    {/*placeholder="Enter Name..."*/}
                                    {/*value={name}*/}
                                    {/*onChange={this.onChange}*/}
                                    {/*/>*/}
                                    {/*</div>*/}
                                    <TextInputGroup
                                        label="Name"
                                        onChange={this.onChange}
                                        value={name}
                                        placeholder="Enter Name..."
                                        name="name"
                                        error={errors.name}
                                    />
                                    <TextInputGroup
                                        label="Email"
                                        onChange={this.onChange}
                                        value={email}
                                        type={email}
                                        placeholder="Enter Email..."
                                        name="email"
                                        error={errors.email}
                                    />
                                    <TextInputGroup
                                        label="Phone"
                                        onChange={this.onChange}
                                        value={phone}
                                        placeholder="Enter Phone..."
                                        name="phone"
                                        error={errors.phone}
                                    />
                                    {/*<div className="form-group">*/}
                                    {/*<label htmlFor="email">Email</label>*/}
                                    {/*<input*/}
                                    {/*type="email"*/}
                                    {/*name="email"*/}
                                    {/*className="form-control form-control-lg"*/}
                                    {/*placeholder="Enter Email..."*/}
                                    {/*value={email}*/}
                                    {/*onChange={this.onChange}*/}
                                    {/*/>*/}
                                    {/*</div>*/}
                                    {/*<div className="form-group">*/}
                                    {/*<label htmlFor="phone">Phone</label>*/}
                                    {/*<input*/}
                                    {/*type="text"*/}
                                    {/*name="phone"*/}
                                    {/*className="form-control form-control-lg"*/}
                                    {/*placeholder="Enter Phone..."*/}
                                    {/*value={phone}*/}
                                    {/*onChange={this.onChange}*/}
                                    {/*/>*/}
                                    {/*</div>*/}
                                    {/*<div className="form-group">*/}
                                    {/*<label htmlFor="address">Address</label>*/}
                                    {/*<input*/}
                                    {/*type="text"*/}
                                    {/*name="address"*/}
                                    {/*className="form-control form-control-lg"*/}
                                    {/*placeholder="Enter Address..."*/}
                                    {/*value={address}*/}
                                    {/*onChange={this.onChange}*/}
                                    {/*/>*/}
                                    {/*</div>*/}
                                    <input
                                        type="submit"
                                        value="Edit Contact"
                                        className="btn btn-light btn-block"
                                    />
                                </form>
                            </div>
                            {/* <h3>Add Contact</h3> */}
                        </div>
                    );
                }}
            </Consumer>
        );
    }
}
