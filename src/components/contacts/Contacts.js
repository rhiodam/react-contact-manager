import React, {Component} from 'react';
import Contact from './Contact';
import {connect} from "react-redux";
import PropTypes from 'prop-types';

// 1
// import {GET_CONTACTS} from "../../actions/types";

// 2
import {getContacts} from "../../actions/contactActions";


class Contacts extends Component {

    componentDidMount() {
        this.props.getContacts();
    }

    render() {
        const {contacts} = this.props;
        return (
            <React.Fragment>
                <h1 className="display-4 mb-2">
                    <span className="text-danger">Contact</span> List
                </h1>
                {contacts.map(contact => (
                    <Contact key={contact.id} contact={contact}/>
                ))}
            </React.Fragment>
        );
    }
}

Contact.propTypes = {
    contacts: PropTypes.array.isRequired,
    getContacts: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
    contacts: state.contact.contacts
});

// 2 no need of this function anymore
// const mapDispatchToProps = (dispatch) => ({
//     getContacts: () => dispatch({type: GET_CONTACTS})
// });

// 1
// export default connect(mapStateToProps, mapDispatchToProps)(Contacts);

// 2
export default connect(mapStateToProps, {getContacts})(Contacts);
