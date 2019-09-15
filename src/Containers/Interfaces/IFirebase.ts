export default interface IFirebase {
    getUserAuth(): void
    auth: Object;
    db: any;
}