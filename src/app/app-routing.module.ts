import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {QuizzesComponent} from './quizzes/quizzes.component';
import {QuizDetailComponent} from './quiz-detail/quiz-detail.component';

const routes: Routes = [
  { path: 'quizzes', component: QuizzesComponent },
  { path: 'quiz-detail/:id', component: QuizDetailComponent }
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule { }
