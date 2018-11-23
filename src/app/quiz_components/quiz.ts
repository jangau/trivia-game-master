import {Question} from './question';

export class Quiz {
  id: number;
  name: string;
  type: number;
  question_set: Question[];
}
