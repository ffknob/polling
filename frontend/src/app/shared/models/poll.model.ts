import { User } from './user.model';
import { PollOption } from './poll-option.model';

export class Poll {
  constructor(
        public title: string,
        public question: string,
        public options: PollOption[],
        public createdBy: User,
        public createdAt: Date) {}
}
