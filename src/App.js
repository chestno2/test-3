import React from 'react'
import Header from './Header';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import TinderCard from 'react-tinder-card';
import TinderCards from './TinderCards';
import Icon from './Icon';
import Chats from './Chats';
import ChatScreen from './ChatScreen';


function App() {
  return (
    <div>
   
    <Router >
      <Switch>
      <Route path = "/chat/:persons">
        <Header backButton = "/chat" />
        <ChatScreen />        
        </Route>
        <Route path = "/chat">
        <Header backButton = "/" />
        <Chats />           
        </Route>
        <Route path = "/">
          <Header />
          <TinderCards  />
          <Icon />
        </Route>
        </Switch>
      </Router>
    
    </div>
  )
}

export default App

