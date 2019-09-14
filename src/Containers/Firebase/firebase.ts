import app from 'firebase/app';
import IFirebase from './IFirebase';
import { SignupPayloadModel } from './../../Models/SignupPayloadModel/index';

const config = {
    apiKey: "AIzaSyDEgUSflAoHxQXREocKchDHKLehQ_X8rmM",
    authDomain: "shadid-test.firebaseapp.com",
    databaseURL: "https://shadid-test.firebaseio.com",
    projectId: "shadid-test",
    storageBucket: "",
    messagingSenderId: "1017057297115",
    appId: "1:1017057297115:web:17161c8c75e8c45d9ac2fe"
};

export default class Firebase implements IFirebase {
    
    auth: any;
    db: Object;

    public constructor () {
        app.initializeApp(config);
        this.auth = app.auth();
        this.db = app.database();
    }

    public getUserAuth (): Object {
        return this.auth;
    }

    public createUser (userData: SignupPayloadModel) {
        return new Promise(resolve => {
          this.auth.createUserWithEmailAndPassword(userData.email, userData.password)
            .then((res: Promise<firebase.auth.UserCredential>) => {
                resolve(res);
            });
        })
    }
    
}


