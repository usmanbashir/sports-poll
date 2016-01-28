import React from "react";
import { Link } from "react-router";

export default class App extends React.Component {
  render() {
    return (
      <div>

        <nav>
          <div className="nav-wrapper container">
            <Link to="/" className="brand-logo left">Sports Poll</Link>
            <ul id="nav-mobile" className="right">
              <li className={this.props.history.isActive("about") ? "active" : ""}>
                <Link to="/about" activeClassName="active">About</Link>
              </li>
            </ul>
          </div>
        </nav>

        <div className="container">
          {this.props.children}
        </div>

        <footer className="page-footer">
          <div className="container">
            <div className="row">
              <div className="col s12">
                <p className="grey-text text-lighten-4">
                  &copy; {new Date().getFullYear()} Sports Poll Inc.
                </p>
              </div>
            </div>
          </div>
        </footer>

      </div>
    );
  }
}
