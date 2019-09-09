export class User {
    constructor(
        public username: string,
        public name: string,
        public email: string,
        public createdBy: User,
        public createdAt: Date
    ) {}
}
