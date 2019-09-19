export default interface IFirebase {
    auth: Object;
    db: any;
    // methods
    getUserAuth(): void
    doSignOut(): void
}