import app from 'firebase/app';
import IFirebase from '../Interfaces/IFirebase';
import IConfig from '../Interfaces/IConfig';

const config: IConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: "",
    messagingSenderId: "1017057297115",
    appId: process.env.REACT_APP_MESSAGING_SENDER_ID,
};

export default class Firebase implements IFirebase {

    auth: Object;
    db: any;

    public constructor() {
        app.initializeApp(config);
        this.auth = app.auth();
        this.db = app.database();
    }

    public getUserAuth(): Object {
        return this.auth;
    }

}


