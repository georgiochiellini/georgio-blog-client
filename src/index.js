import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
import MessageStore from './app/stores/MessageStore';
import UserStore from './app/stores/UserStore'
import WindowStore from './app/stores/WindowStore';

export const Context = createContext(null)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Context.Provider value={{
    user: new UserStore(),
    messages: new MessageStore(),
    windowOpener: new WindowStore()
  }}>
    <App />
  </Context.Provider>
);
