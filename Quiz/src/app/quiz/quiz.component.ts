import { HttpErrorResponse } from '@angular/common/http';
import { Component, ViewContainerRef } from '@angular/core';
import { QuizService } from '../quiz.service';
import {Quiz} from './quiz';
import { QuestionsComponent } from '../questions/questions.component';
import { Time } from '@angular/common';
import { Timestamp } from 'rxjs';


@Component({
  selector: 'quiz',
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css'
})
export class QuizComponent {

  public quiz: Quiz;
  public category: string = " ";
  public  amountOfQuestions: any;
  questions_answers_area: any;
  public intervalId : any;
  public quizDuration :any;
  public minutes : any;
  public seconds : any;

  constructor(private quizService: QuizService, private viewContainer: ViewContainerRef){
    this.quiz = new Quiz();
    
    console.log(this.questions_answers_area);

  }

  onQuizCreate(quiz:Quiz){
    console.log(quiz);
    this.quizService.postQuizdetails(quiz);   
    this.category = quiz.category.toString();
    this.amountOfQuestions = quiz.amountOfQuestions;
    this.quizDuration = this.amountOfQuestions*60;   
    
  }

  startQuiz(){
    this.viewContainer.createComponent(QuestionsComponent);
    /** set Interval Id */
    this.intervalId = setInterval(() => {
      this.amountOfQuestions;
    }, 1000);
  }

  startCountDown() {
    this.minutes = Math.floor(this.quizDuration / 60);
    this.seconds = this.quizDuration % 60;
  }

  stopCountDown() {
    clearInterval(this.intervalId);
  }
  
 
}
