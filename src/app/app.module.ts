import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { QuizzesComponent } from './quizzes/quizzes.component';
import { AppRoutingModule } from './app-routing.module';
import { QuizDetailComponent } from './quiz-detail/quiz-detail.component';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { AlertsComponent } from './alerts/alerts.component';

@NgModule({
  declarations: [
    AppComponent,
    QuizzesComponent,
    QuizDetailComponent,
    AlertsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    NgbAlertModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
