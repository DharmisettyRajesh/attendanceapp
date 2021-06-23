import React,{useState,useCallback,useEffect} from 'react';
import {
  BrowserRouter,
  Route,
  Redirect,
  Switch
}from 'react-router-dom';

import Firstyear from './firstyear/pages/firstyear';
import Secondyear from './secondyear/pages/secondyear';
import Thirdyear from './thirdyear/pages/thirdyear';
import Fourthyear from './fourthyear/pages/fourthyear';
import Auth from './Authentication/Auth';
import Miracle from './miracle/home.js';
import Mainnavigation from './shared/navigation/mainnavigation';
import AuthContext from  './shared/Context/context.js';


const App=()=>{
  const [token, settoken] = useState();

  const login = useCallback((token) => {
    settoken(token);
    localStorage.setItem('rajesh',JSON.stringify({token:token}))
  }, []);

  const logout = useCallback(() => {
    settoken(null);
    localStorage.removeItem('rajesh');
  }, []);
  useEffect(()=>{
     const storedata=JSON.parse(localStorage.getItem('rajesh'));
     if(storedata && storedata.token){
       login(storedata.token)
     }
  },[login])

  let routes;
  if(token){
    routes=(
      <Switch>
      <Route path="/" exact>
        <Miracle />
      </Route>
     
       <Route path="/firstyear" exact>
     <Firstyear />
   </Route>
   <Route path="/secondyear" exact>
     <Secondyear />
   </Route>
   <Route path="/thirdyear" exact>
     <Thirdyear/>
   </Route>
   <Route path="/fourthyear" exact>
     <Fourthyear />
   </Route>
    <Redirect to="/" />
      </Switch>
    )
  }
  else{
    routes=(
      <Switch>
      <Route path="/" exact>
        <Miracle />
      </Route>
      <Route path="/auth" exact>
            <Auth />
       </Route>
    
   <Redirect to="/" />
   </Switch>
    )
  }
  return(
    <AuthContext.Provider
      value={{ isLoggedIn:!!token,token:token, login: login, logout: logout }}
    >
  <BrowserRouter>
  <Mainnavigation />
  <main>{routes}</main>
  </BrowserRouter>
  </AuthContext.Provider>
   
  );


}

export default App;