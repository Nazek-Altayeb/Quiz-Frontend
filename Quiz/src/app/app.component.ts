import { Component, OnInit, ViewChild } from '@angular/core';
import { QuizComponent } from './quiz/quiz.component';
import { Question } from './questions/question';
import { QuizService } from './quiz.service';
import { HttpErrorResponse } from '@angular/common/http';
import { QuestionsComponent } from './questions/questions.component';
import {RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit{
  // title = 'Quiz';
   // @ViewChild(QuestionsComponent) questionComponent: QuestionsComponent;
  showQuestionsAndAnswersArea: boolean = false;
  constructor(){}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  

 
}
