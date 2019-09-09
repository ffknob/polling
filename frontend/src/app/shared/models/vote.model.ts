import { User } from './user.model';

export class Vote {
    constructor(
        public voter: User,
        public multiplier: number
    ) {}
}
