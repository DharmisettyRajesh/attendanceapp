import React, { useState, useContext} from 'react';

import Card from '../shared/Elements/Card';
import Input from '../shared/Elements/Input';
import Button from '../shared/Elements/Button';

import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE
} from '../shared/Validators/Validators';
import { useForm } from '../shared/Hooks/hook';
import  AuthContext  from '../shared/Context/context';
import Spinner from '../shared/impcomponents/Spinner';
import ErrorModal from '../shared/impcomponents/ErrorModal';
import './Auth.css';

const Auth = () => {
  const auth = useContext(AuthContext);
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [formState, inputHandler, setFormData] = useForm(
    {
      email: {
        value: '',
        isValid: false
      },
      password: {
        value: '',
        isValid: false
      }
    },
    false
  );

  const switchModeHandler = () => {
    if (!isLoginMode) {
      setFormData(
        {
          ...formState.inputs,
          name: undefined
        },
        formState.inputs.email.isValid && formState.inputs.password.isValid
      );
    } else {
      setFormData(
        {
          ...formState.inputs,
          name: {
            value: '',
            isValid: false
          }
        },
        false
      );
    }
    setIsLoginMode(prevMode => !prevMode);
  };

  const authSubmitHandler =  async event => {
    event.preventDefault();
    
    if(isLoginMode){
      try
      {
        setIsLoading(true);
     const response =await  fetch('https://registerattendance.herokuapp.com/login',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email:formState.inputs.email.value,
        password:formState.inputs.password.value
      })
      });
      const responsedata= await response.json();
      if(!response.ok){
        throw new Error(responsedata.message);

      }
      
      setIsLoading(false);
      auth.login(responsedata.token);
     }
    catch (err) {
      setIsLoading(false);
      setError(err.message || 'something went wrong')
      }
    }
    

    
    else{
      try{
        setIsLoading(true);

      const response=await fetch('https://registerattendance.herokuapp.com/signup',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name:formState.inputs.name.value,
        email:formState.inputs.email.value,
        password:formState.inputs.password.value
      })
        });
      const responsedata = await response.json();
     if(!response.ok){
        throw new Error(responsedata.message);

     }
     console.log(responsedata);
      setIsLoading(false);
      auth.login(responsedata.token);
    }
  
  catch (err) {
    setIsLoading(false);
    setError(err.message || 'something went wrong plese try one more time')
  }
 }
    
};
const triggerhandler=()=>{
  setError(null);
}

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={triggerhandler}/>
    <Card className="authentication">
      {isLoading && <Spinner  asOverlay/>}
      <h2>Login Required</h2>
      <hr />
      <form onSubmit={authSubmitHandler}>
        {!isLoginMode && (
          <Input
            element="input"
            id="name"
            type="text"
            label="Your Name"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter a name."
            onInput={inputHandler}
          />
        )} 
        <Input
          element="input"
          id="email"
          type="email"
          label="E-Mail"
          validators={[VALIDATOR_EMAIL()]}
          errorText="Please enter a valid email address."
          onInput={inputHandler}
        />
        <Input
          element="input"
          id="password"
          type="password"
          label="Password"
          validators={[VALIDATOR_MINLENGTH(5)]}
          errorText="Please enter a valid password, at least 5 characters."
          onInput={inputHandler}
        />
        <Button type="submit" disabled={!formState.isValid}>
          {isLoginMode ? 'LOGIN' : 'SIGNUP'}
        </Button>
      </form>
      <Button inverse onClick={switchModeHandler}>
        SWITCH TO {isLoginMode ? 'SIGNUP' : 'LOGIN'}
      </Button>
    </Card>
    </React.Fragment>
  );
};

export default Auth;
