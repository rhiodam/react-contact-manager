import React, {Component} from "react";
import PropTypes from "prop-types";
import axios from 'axios';
import {Link} from "react-router-dom";

import {Consumer} from "../../context";

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showContactInfo: true
        };
    }

    // state = {
    //   showContactInfo: true
    // };
    onShowClick = e => {
        // console.log("Hello World");
        // console.log(this.state);
        // console.log(e.target);
        this.setState({showContactInfo: !this.state.showContactInfo});
    };

    onDeleteClick = async (id, dispatch) => {
        // console.log("Hello World");
        // this.props.deleteClickHandler();
        try {
            await axios
                .delete(`https://jsonplaceholder.typicode.com/users/${id}`);
            dispatch({type: "DELETE_CONTACT", payload: id});
        } catch (e) {
            dispatch({type: "DELETE_CONTACT", payload: id});
        }

    };

    render() {
        //  destructuring
        // const { name, age, phone } = this.props;
        const {id, name, phone, email} = this.props.contact;
        const {showContactInfo} = this.state;
        // const deleteClickHandler = this.props;

        return (
            <Consumer>
                {value => {
                    const {dispatch} = value;
                    return (
                        <div className="card card-body mb-3">
                            <h4>
                                {name}{" "}
                                <i
                                    onClick={this.onShowClick}
                                    className="fa fa-sort-down"
                                    style={{cursor: "pointer"}}
                                />
                                <i
                                    className="fas fa-times"
                                    style={{cursor: "pointer", float: "right", color: "red"}}
                                    onClick={this.onDeleteClick.bind(this, id, dispatch)}
                                />
                                
                                <Link to={`contact/edit/${id}`}>
                                    <i
                                        className="fas fa-pencil-alt"
                                        style={{
                                            cursor:'pointer',
                                            float:'right',
                                            color:'black',
                                            marginRight:'1rem'
                                        }}
                                    >

                                    </i>
                                </Link>
                            </h4>
                            {/* <h4>{contact.name}</h4> */}
                            {/* to toggle the contact detail */}
                            {showContactInfo ? (
                                <ul className="list-group">
                                    {/* <li className="list-group-item">Email : rhioda.muthie@gmail.com</li>
          <li className="list-group-item">Phone : {phone}</li>
          <li className="list-group-item">Age : {age}</li>
          <li className="list-group-item">Address : Tebet barat dalam</li> */}
                                    {/* using contact */}
                                    {/* <li className="list-group-item">Email : {contact.email}</li>
          <li className="list-group-item">Phone : {contact.phone}</li>
          <li className="list-group-item">Age : {contact.age}</li> */}

                                    <li className="list-group-item">Name : {name}</li>
                                    <li className="list-group-item">Email : {email}</li>
                                    <li className="list-group-item">Phone : {phone}</li>
                                    {/*<li className="list-group-item">Age : {age}</li>*/}
                                    {/*<li className="list-group-item">Address : {address2} </li>*/}
                                </ul>
                            ) : null}
                        </div>
                    );
                }}
            </Consumer>

            //   <div>
            //     <h4>Rhioda Muthie</h4>
            //     <ul>
            //       <li>Email : rhioda.muthie@gmail.com</li>
            //       <li>Phone : 085271062544</li>
            //       <li>Age : 24</li>
            //       <li>Address : Tebet barat dalam</li>
            //     </ul>
            //   </div>
        );
    }
}

Contact.propTypes = {
    // name: PropTypes.string.isRequired,
    // age: PropTypes.string.isRequired,
    // phone: PropTypes.string.isRequired
    contact: PropTypes.object.isRequired
    // deleteClickHandler: PropTypes.func.isRequired
};

export default Contact;
