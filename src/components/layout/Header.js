import React from "react";
import PropTypes from "prop-types";
import "../contacts/contact.css";
import {Link} from 'react-router-dom';


const Header = props => {
  const { branding } = props;
  return (
    // <div>
    //   {/* coz this is functional component we accesses it by props. */}
    //   {/* this way */}
    //   {/* <h1 style={{ color: "red" , fontSize : '18' }}>{branding}</h1> */}
    //   {/* or this way */}
    //   <h1 style={headingStyle}>{branding}</h1>
    // </div>
    <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
      <div className="container">
        <a href="/" className="navbar-brand">
          {branding}
        </a>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <i className="fas fa-home"></i>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact/add" className="nav-link">
                <i className="fas fa-plus"></i>
                Add
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                <i className="fas fa-question"></i>
                About
              </Link>
            </li>
            {/*<li>*/}
              {/*<a href="" className="nav-link">*/}
                {/*About*/}
              {/*</a>*/}
            {/*</li>*/}
          </ul>
        </div>
      </div>
    </nav>
  );
};

Header.defaultProps = { branding: "My Apps" };

Header.propTypes = {
  branding: PropTypes.string.isRequired
};

// const headingStyle = {
//   color: "green",
//   fontSize: "20"
// };

export default Header;
