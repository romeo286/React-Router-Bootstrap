import React from 'react';
 import { Button , Form ,FormGroup ,Label ,Input}
 from 'reactstrap';
 import {FacebookLoginButton} from 'react-social-login-buttons';

function About() {
  return (
 
    <Form className="form">
    <h1 className="text-center"> <span className="font-weight-bold">Welcome</span></h1>
    
      <FormGroup>
      <label>Email:</label> <br></br>
      <input type ="email"  class="form-control"placeholder="Email"/>

      </FormGroup>
      <FormGroup>
      <label>Password:</label>
      <input type ="password"  class="form-control" placeholder="Password"/>

      </FormGroup>
      <Button className="btn-lg btn-dark btn-block">
        Log In
        </Button>
        <div className="text-center pt-3">
          Or continue with your social account
        </div>
        <FacebookLoginButton className="mt-3 mb-3"/>
        <div className="text-center">
          <a href="/singup">Sign Up</a>
          <span className="p-2">|</span>
          <a href="/login">Forgot Password</a>
        </div>
    </Form>

  );
}

export default About;
