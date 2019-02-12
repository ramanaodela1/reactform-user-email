import React from "react";
import { isEmpty, trim } from 'lodash';
import PropTypes from 'prop-types';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      formErrors: {
        username: '',
        password: '',
      }

    };
  }
  handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };
  static contextTypes = {
    router: PropTypes.object,
  }
  handleSubmit = (e) => {
    let reg = /\S+@\S+\.\S+/;
    this.setState({
      formErrors: {
        username: '',
        password: '',
      },
    });
    let userObj = {
      username: this.state.username,
      password: this.state.password,
    }
    let {username,password}=this.state;
    let uerr,perr;
    if(isEmpty(username)){
      uerr="Please enter username";
      this.setState({
        formErrors: {
          username: uerr,
          password: '',
        },
      });
    }
    else if (!isEmpty(username.trim()) && !reg.test(username) ) { 
      this.setState({ formErrors: { username: 'inavalid email' } });
    }
    else if(isEmpty(password)){
      perr="Please enter password";
      this.setState({
        formErrors: {
          username: '',
          password: perr,
        },
      });
    }
    else{
      this.context.router.history.push("/about") 
    }
  }

  render() {
    const { formErrors, username, password } = this.state;
    return (
      <div>
        <div className="col-12">
          <form>
            <div className="form-group">
              <label htmlFor="username">Username:</label>
              <input type="text" id="emailAddress" placeholder="Email address" className="form-control" value={this.state.username} onChange={this.handleChange} name="username" />
              <span className="text-danger">{formErrors.username}</span>

            </div>
            <div className="form-group">
              <label htmlFor="password">password:</label>
              <input type="password" className="form-control" placeholder="Enter password" name="password" onChange={this.handleChange} value={this.state.password} />

              <span className="text-danger">{formErrors.password}</span>

            </div>

            <button type="button" className="btn btn-default btn-success" onClick={this.handleSubmit}>Login</button>
          </form>
        </div>


      </div>
    );
  }
}

export default Home;