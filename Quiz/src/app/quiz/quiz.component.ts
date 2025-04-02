import { HttpErrorResponse } from '@angular/common/http';
import { Component, Output, ViewContainerRef } from '@angular/core';
import { QuizService } from '../quiz.service';
import {Quiz} from './quiz';
import { QuestionsComponent } from '../questions/questions.component';


@Component({
  selector: 'quiz',
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css'
})
export class QuizComponent {

  public quiz: Quiz;
  category : any;
  amountOfQuestions : any;

  constructor(private quizService: QuizService, private viewContainer: ViewContainerRef){
    this.quiz = new Quiz();
    
  }

  onQuizCreate(quiz:Quiz){
    console.log(quiz);
    this.quizService.postQuizdetails(quiz);   
    this.category =  this.quizService.setCategory(quiz);
    this.amountOfQuestions =  this.quizService.setAmountOfQuestions(quiz);
  }

  startQuiz(){
    this.viewContainer.createComponent(QuestionsComponent);
    
  }

 
  
 
}
