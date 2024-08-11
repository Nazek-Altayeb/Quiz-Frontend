import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { catchError } from 'rxjs';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrl: './question.component.css'
})
export class QuestionComponent {


  constructor(private quizService: QuizService){

  }
  onQuizCreate(quiz:{amoutOfQuestions:number, inlineRadioOptions:any}){
    console.log(quiz);
    this.quizService.addQuizdetails(quiz);
  }

}
