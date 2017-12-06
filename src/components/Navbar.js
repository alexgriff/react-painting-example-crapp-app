import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const Navbar = props => {
  return (
    <div className={`ui top fixed inverted ${props.color} menu`}>
      <Link to="/" className="item">
        <h2 className="ui header">
          <i className={`${props.icon} icon`} />
          <div className="content">{props.title}</div>
          <div className="sub header">{props.description}</div>
        </h2>
      </Link>
      <div className="right menu">
        <Link to="/paintings" className="item">
          index
        </Link>
        <Link to="/paintings/new" className="item">
          new
        </Link>
        {props.currentUser.id ? (
          <div className="item">Welcome {props.currentUser.username}</div>
        ) : null}
        {props.currentUser.id ? (
          <a className="item">
            <div
              onClick={() => {
                props.handleLogout();
                props.history.push('/login');
              }}
              className="ui primary button"
            >
              Sign Out
            </div>
          </a>
        ) : (
          <Link to="/login" className="item">
            <div className="ui primary button">Sign In</div>
          </Link>
        )}
      </div>
    </div>
  );
};

export default withRouter(Navbar);
