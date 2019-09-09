import { Vote } from './vote.model';

export class PollOption {
    constructor(
        public option: string,
        public votes: Vote[]
    ) {}
}
