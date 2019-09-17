import React from 'react';
import { withFirebase } from '../Firebase';

const AuthUserContext = React.createContext<null  | any>(null); 

export const withAuthentication = (Component: any) => {
    /** inner classs like Java My Guy */
    class AuthComponent extends React.Component {
        state: any
        listener: any
        constructor(props: any) {
            super(props);
            this.state = {
              authUser: null,
            }; 
        }

        componentDidMount() {
            let props: any = this.props
            this.listener = props.firebase.auth.onAuthStateChanged(
                (authUser: any) => {
                  authUser
                    ? this.setState({ authUser })
                    : this.setState({ authUser: 'not signed in' });
                },
            );
        }

        componentWillUnmount() {
            this.listener();
        }

        render () {
            return (
                <AuthUserContext.Consumer>
                    {authUser => <Component {...this.props} authUser={this.state.authUser} />}
                </AuthUserContext.Consumer>
            )
        }
    }
    /** Done */
    return withFirebase(AuthComponent)
}

export default AuthUserContext;