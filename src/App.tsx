import React, { Fragment } from 'react';
import AppRouter from './Containers/Router';
import Firebase, { FirebaseContext } from './Containers/Firebase';


const App: React.FC = () => {
  return (
    <FirebaseContext.Provider value={new Firebase()}>
      <AppRouter />
    </FirebaseContext.Provider>
  );
}

export default App;
