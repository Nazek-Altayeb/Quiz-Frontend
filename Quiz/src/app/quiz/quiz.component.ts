import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { catchError } from 'rxjs';
import { QuizService } from '../quiz.service';
import {Quiz} from './quiz'

@Component({
  selector: 'quiz',
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css'
})
export class QuizComponent {

  public quiz: Quiz;
  constructor(private quizService: QuizService){
    this.quiz = new Quiz();

  }
  onQuizCreate(quiz:Quiz){
    console.log(quiz);
    this.quizService.addQuizdetails(quiz);
  }

}
