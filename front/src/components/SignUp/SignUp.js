import React, { Component } from 'react';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ''
    };

    this.isSubmitDisabled = true;
  }

  updateEmailField = (event) => {
    this.setState({email: event.target.value});
  }


  render = () => {
    return(
      <div>
        <h1>{this.state.email}</h1>
          <input type="email" name="email" value={this.state.email} onChange={this.updateEmailField} />
      </div>
    );
  }
}

export default SignUp;