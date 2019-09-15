import React from 'react';
import IFirebase from "../../Models/IFirebase";

const FirebaseContext = React.createContext<IFirebase | null>(null);

export const withFirebase = (Component: any) => (props: any) => (
  <FirebaseContext.Consumer>
    {firebase => <Component {...props} firebase={firebase} />}
  </FirebaseContext.Consumer>
);

export default FirebaseContext;