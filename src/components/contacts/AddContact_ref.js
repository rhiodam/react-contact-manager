import React, { Component } from "react";

export default class AddContact extends Component {
  constructor(props) {
    super(props);

    this.nameInput = React.createRef();
    this.addressInput = React.createRef();
    this.phoneInput = React.createRef();
    this.emailInput = React.createRef();
  }

  static defaultProps = {
    name: "Eihtum Adoihr",
    email: "eihtum.adoihr@gmail.com",
    phone: "085271062544",
    address: "Tebet barat dalam"
  };

  defstate = {
    name: "",
    email: "",
    phone: "",
    address: ""
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    // console.log(this.state);
    const contact = {
      name: this.nameInput.current.value,
      email: this.emailInput.current.value,
      phone: this.phoneInput.current.value,
      address: this.addressInput.current.value
    };
    console.log(contact);
  };

  render() {
    // const { name, email, phone, address } = this.state;
    const { name, email, phone, address } = this.props;
    return (
      <div className="card mb-3">
        <div className="card-header">New Contact</div>
        <div className="card-body">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                className="form-control form-control-lg"
                placeholder="Enter Name..."
                defaultValue={name}
                ref={this.nameInput}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                className="form-control form-control-lg"
                placeholder="Enter Email..."
                defaultValue={email}
                ref={this.emailInput}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="text"
                name="phone"
                className="form-control form-control-lg"
                placeholder="Enter Phone..."
                defaultValue={phone}
                ref={this.phoneInput}
              />
            </div>
            <div className="form-group">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                name="address"
                className="form-control form-control-lg"
                placeholder="Enter Address..."
                defaultValue={address}
                ref={this.addressInput}
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
  }
}
