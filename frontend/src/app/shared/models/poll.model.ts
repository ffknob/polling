import { User } from './user.model';
import { PollOption } from './poll-option.model';

export class Poll {
  constructor(
        public title: string,
        public question: string,
        public options: PollOption[],
        public _id?: any,
        public createdBy?: User,
        public createdAt?: Date) {}

  static adapt(data): Poll {
   return new Poll(
    data.title,
    data.question,
    data.options,
    data._id,
    data.createdBy,
    data.createdAt
   );
  }

  getVotingURL() {
    return `${window.location.protocol}//${window.location.hostname}:${window.location.port}/polls/vote/${this._id}`;
  }
}
