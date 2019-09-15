import FirebaseApp from '@firebase/app-types';


export default interface IFirebase {
    getUserAuth(): void
    auth: Object;
    db: any;
}