// rcc
import React, { Component } from "react";

import { Consumer } from "../../context";

//component
import Contact from "./Contact";

class Contacts extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // deleteContact = id => {
  //   // console.log(123);
  //   const { contacts } = this.state;
  //   const newContacts = contacts.filter(contact => contact.id !== id);
  //   this.setState({
  //     contacts: newContacts
  //   });
  // };

  render() {
    return (
      <Consumer>
        {value => {
          const { contacts } = value;
          return (

              // Gantiin tag div yang cuma bisa satu bisa ga banyak div
            <React.Fragment>
              <h1 className="display-4 mb-2">
                <span className="text-danger">Contact</span> List</h1>
              {contacts.map(contact => (
                <Contact
                  key={contact.id}
                  contact={contact}
                  // deleteClickHandler={this.deleteContact.bind(this, contact.id)}
                />
              ))}
            </React.Fragment>
            )
        }}
      </Consumer>

    )

    // const { contacts } = this.state;

    // // return <div>{contacts.map}</div>;
    // return (
    //   <React.Fragment>
    //     {/* <div> */}
    //     {/* // High order function */}
    //     {contacts.map(contact => (
    //       // test
    //       // <h1>{contact.name}</h1>
    //       <Contact
    //         key={contact.id}
    //         // name={contact.name}
    //         // email={contact.email}
    //         // phone={contact.phone}

    //         // send to prop all of it
    //         // rather than 1 by 1
    //         contact={contact}
    //         deleteClickHandler={this.deleteContact.bind(this, contact.id)}
    //       />
    //     ))}
    //     {/* </div> */}
    //   </React.Fragment>
    // );
  }
}

export default Contacts;
