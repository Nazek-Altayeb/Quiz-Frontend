import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { catchError } from 'rxjs';
import { QuizService } from '../quiz.service';
import {Quiz} from './questionModel'

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrl: './question.component.css'
})
export class QuestionComponent {

  public quiz: Quiz;
  constructor(private quizService: QuizService){
    this.quiz = new Quiz();

  }
  onQuizCreate(quiz:Quiz){
    console.log(quiz);
    this.quizService.addQuizdetails(quiz);
  }

}
