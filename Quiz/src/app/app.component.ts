import { Component, OnInit } from '@angular/core';
import { QuizComponent } from './quiz/quiz.component';
import { Question } from './questions/question';
import { QuizService } from './quiz.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{
  title = 'Quiz';

  constructor(){}
  

 
}
