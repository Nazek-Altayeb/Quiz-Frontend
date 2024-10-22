import { HttpErrorResponse } from '@angular/common/http';
import { Component, ComponentFactory, ComponentFactoryResolver, Injectable, Renderer2, ViewContainerRef } from '@angular/core';
import { QuizService } from '../quiz.service';
import {Question} from '../questions/question';
import {Quiz} from './quiz';
import { QuestionsComponent } from '../questions/questions.component';


@Component({
  selector: 'quiz',
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css'
})
export class QuizComponent {

  public quiz: Quiz;
  public category: string = " ";
  questions_answers_area: any;
  constructor(private quizService: QuizService, private viewContainer: ViewContainerRef){
    this.quiz = new Quiz();
    
    console.log(this.questions_answers_area);

  }
  onQuizCreate(quiz:Quiz){
    console.log(quiz);
    this.quizService.deleteCache();
    this.quizService.postQuizdetails(quiz);   
    this.quizService.sendClickEvent(); 
    this.category = quiz.category.toString();
  
  }
  startQuiz(){
    this.viewContainer.createComponent(QuestionsComponent);
  }
  
 
}
