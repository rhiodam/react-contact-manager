import React, {Component} from "react";
import {Consumer} from "../../context";
import uuid from "uuid";
import TextInputGroup from "../layout/TextInputGroup";

export default class AddContact extends Component {
    state = {
        name: "",
        email: "",
        phone: "",
        address: ""
    };

    onChange = e => {
        this.setState({[e.target.name]: e.target.value});
    };

    onSubmit = (dispatch, e) => {
        e.preventDefault();
        console.log(this.state);
        const {name, email, phone, address} = this.state;

        const newContact = {
            id: uuid(),
            name,
            email,
            phone,
            address
        };

        dispatch({type: "ADD_CONTACT", payload: newContact});
    };

    render() {
        const {name, email, phone, address} = this.state;

        return (
            <Consumer>
                {value => {
                    const {dispatch} = value;
                    return (
                        <div className="card mb-3">
                            <div className="card-header">New Contact</div>

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
                                    />
                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            className="form-control form-control-lg"
                                            placeholder="Enter Email..."
                                            value={email}
                                            onChange={this.onChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="phone">Phone</label>
                                        <input
                                            type="text"
                                            name="phone"
                                            className="form-control form-control-lg"
                                            placeholder="Enter Phone..."
                                            value={phone}
                                            onChange={this.onChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="address">Address</label>
                                        <input
                                            type="text"
                                            name="address"
                                            className="form-control form-control-lg"
                                            placeholder="Enter Address..."
                                            value={address}
                                            onChange={this.onChange}
                                        />
                                    </div>
                                    <input
                                        type="submit"
                                        value="Add Contact"
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
