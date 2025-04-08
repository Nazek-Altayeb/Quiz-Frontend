import { HttpErrorResponse } from '@angular/common/http';
import { Component, Output, ViewContainerRef } from '@angular/core';
import { QuizService } from '../quiz.service';
import {Quiz} from './quiz';
import { QuestionsComponent } from '../questions/questions.component';
import { categoriesDictionary } from '../categoriesDictionary';


@Component({
  selector: 'quiz',
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css'
})
export class QuizComponent {

  public quiz: Quiz;
  public category : any;
  public amountOfQuestions : any;
  public selectedCategory: any;

  constructor(private quizService: QuizService, private viewContainer: ViewContainerRef){
    this.quiz = new Quiz();
    
  }

  onQuizCreate(quiz:Quiz){
    // console.log(quiz);
    this.quizService.postQuizdetails(quiz);   
    this.quizService.setCategory(quiz);
    this.amountOfQuestions =  this.quizService.setAmountOfQuestions(quiz);
    
  }

  startQuiz(){
    this.viewContainer.createComponent(QuestionsComponent);
    
  }  
 
}
