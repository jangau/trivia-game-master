import {Answer} from './answer';

export class Question {
  id: number;
  question_text: string;
  order: number;
  answer_set: Answer[];
}
