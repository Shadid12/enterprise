import React from 'react';
import AppRouter from './Containers/Router';
import Firebase, { FirebaseContext } from './Containers/Firebase';
import './App.css'


const App: React.FC = () => {
  return (
    <FirebaseContext.Provider value={new Firebase()}>
      <AppRouter />
    </FirebaseContext.Provider>
  );
}

export default App;
