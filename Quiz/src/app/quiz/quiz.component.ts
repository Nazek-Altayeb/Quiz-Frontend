import { HttpErrorResponse } from '@angular/common/http';
import { Component, Injectable, Renderer2 } from '@angular/core';
import { QuizService } from '../quiz.service';
import {Question} from '../questions/question';
import {Quiz} from './quiz';


@Component({
  selector: 'quiz',
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css'
})
export class QuizComponent {

  public quiz: Quiz;
  public category: string = " ";
  questions_answers_area: any;
  constructor(private quizService: QuizService){
    this.quiz = new Quiz();
    
    console.log(this.questions_answers_area);

  }
  onQuizCreate(quiz:Quiz){
    console.log(quiz);
    this.quizService.addQuizdetails(quiz);   
    this.quizService.sendClickEvent(); 
  
  }

  
 
}
