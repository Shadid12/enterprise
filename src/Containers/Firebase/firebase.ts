import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';
import IFirebase from '../../Models/IFirebase';
import IConfig from '../../Models/IConfig';
import { ISignupPayloadModel } from '../../Models/ISignupPayloadModel';
import { UserCredential } from '@firebase/auth-types';
import { DataSnapshot } from '@firebase/database-types';

const config: IConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: "",
    messagingSenderId: process.env.REACT_APP_MSG_SENDER_ID,
    appId: process.env.REACT_APP_MESSAGING_SENDER_ID,
};

export default class Firebase implements IFirebase {

    auth: any;
    db: any;

    public constructor() {
        if (app.apps.length === 0) {
            app.initializeApp(config);
            this.auth = app.auth();
            this.db = app.database();
        }
    }

    public getUserAuth(): Object {
        return this.auth;
    }

    public createUser(userData: ISignupPayloadModel): Promise<firebase.auth.UserCredential> {
        return new Promise(resolve => {
            this.auth.createUserWithEmailAndPassword(userData.email, userData.password)
                .then((res: firebase.auth.UserCredential ) => {
                    const userId: firebase.User | null = res.user
                    if(userId) {
                        let email = userData.email
                        let isNurse = userData.isNurse
                        this.db.ref(`users/${userId.uid}`).set({
                            email,
                            isNurse
                        }).then(() => {
                            resolve(res);
                        })
                    }
                })
                .catch( (err: any) => {
                    let error: any = {
                        code: 'Email-taken',
                        type: err
                    }
                    resolve(error)
                })
        })
    }

    public doSignin(payload: ISignupPayloadModel): Promise<UserCredential> {
        return new Promise(resolve => {
            this.auth.signInWithEmailAndPassword(payload.email, payload.password).then((res: UserCredential) => {
              resolve(res);
            }).catch((err: any) => {
              resolve(err);
            })
        })
    }

    public doSignOut(): void {
        this.auth.signOut();
    }

    public getNurses(): Promise<any> {
        return new Promise(resolve => {
            const ref = this.db.ref('/users')
            ref.orderByChild('isNurse').equalTo(true).on('value', (snapshot: any) => {
                const val: any = []
                for (let [key, value] of Object.entries(snapshot.val())) {
                    let newObject: any = value
                    newObject.id = key
                    val.push(newObject)
                }
                resolve(val)
            })
        })
    }

    public getUserById(id: string): Promise<DataSnapshot> {
        return new Promise(resolve => {
            const ref = this.db.ref(`/users/${id}`)
            ref.on('value', (snapshot:DataSnapshot) => {
                resolve(snapshot.val())
            })
        })
    }

    public getScheduleById(id: string): Promise<DataSnapshot> {
        return new Promise(resolve => {
            const ref = this.db.ref(`/schedule/${id}`)
            ref.on('value', (snapshot:DataSnapshot) => {
                resolve(snapshot.val())
            })
        })
    }

    public setSchedulebyId(id: string, payload: any): Promise<DataSnapshot> {
        console.log('____>>>', payload)
        return new Promise(resolve => {
            const ref = this.db.ref(`/schedule/${id}`)
            ref.update(payload)
            resolve()
        })
    }

}


