import {Component, Input, OnInit} from '@angular/core';
import { Location } from '@angular/common';
import {Quiz} from '../quiz_components/quiz';
import {QuizzesService} from '../quizzes.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-quiz-detail',
  templateUrl: './quiz-detail.component.html',
  styleUrls: ['./quiz-detail.component.css']
})
export class QuizDetailComponent implements OnInit {
  @Input() quiz: Quiz;

  constructor(
    private route: ActivatedRoute,
    private quizzesService: QuizzesService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getQuiz();
  }

  getQuiz(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.quizzesService.getQuiz(id)
      .subscribe(quiz => this.quiz = quiz);
  }

}
