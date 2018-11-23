import { Component, OnInit } from '@angular/core';
import {Quiz} from '../quiz_components/quiz';
import {QuizzesService} from '../quizzes.service';

@Component({
  selector: 'app-quizzes',
  templateUrl: './quizzes.component.html',
  styleUrls: ['./quizzes.component.css']
})
export class QuizzesComponent implements OnInit {
  quizzes: Quiz[];
  constructor(private quizzesService: QuizzesService) { }

  ngOnInit() {
    this.getQuizzes();
  }

  getQuizzes(): void {
    this.quizzesService.getQuizzes()
      .subscribe(quizzes => this.quizzes = quizzes);
  }

}
