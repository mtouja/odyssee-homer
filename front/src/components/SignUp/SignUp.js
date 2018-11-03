import React, { Component } from 'react';
import { Label, Input, Button, Form, FormGroup } from 'reactstrap';
import './SignUp.css';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "daria@daria.com",
      password:"monPassw0rd",
      name:"Daria",
      lastname:"Morgendorffer",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.isSubmitDisabled = true;
  }
  
  handleSubmit(){
    console.log(JSON.stringify(this.state));
  }

  updateEmailField = (event) => {
    this.setState({email: event.target.value});
  }

  updateName = (event) => {
    this.setState({name: event.target.value});
  }

  updateLastName = (event) => {
    this.setState({lastname: event.target.value});
  }

  updatePassword = (event) => {
    this.setState({password: event.target.value});
  }

  render = () => {
    return(
      <div>
        <h1>{JSON.stringify(this.state)}</h1>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label class="label"for="exampleEmail">Your email<br/></Label>
              <Input type="email" name="email" value={this.state.email} onChange={this.updateEmailField} />
          </FormGroup>
          <FormGroup>
            <Label class="label"for="exampleName">Your name<br/></Label>
              <Input type="text" name="name" value={this.state.name} onChange={this.updateName}/>
          </FormGroup>  
          <FormGroup>
            <Label class="label">Your lastname<br/></Label>
              <Input type="text" name="lastname" value={this.state.lastname} onChange={this.updateLastName}/>
          </FormGroup> 
          <FormGroup>
            <Label class="label">Your password<br/></Label>
              <Input type="password" name="password" value={this.state.password} onChange={this.updatePassword}/>
          </FormGroup>
          <FormGroup>
            <Label class="label">Confirm password<br/></Label>
              <Input type="password" name="password" value={this.state.password} onChange={this.updatePassword}/>
          </FormGroup>
            <Button>
              <Input id="submit" type="submit" value="Soumettre"/>
            </Button>
          </Form>
      </div>
    );
  }
}

export default SignUp;