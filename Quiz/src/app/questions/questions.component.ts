import { HttpErrorResponse } from '@angular/common/http';
import { Component, Injectable, OnInit } from '@angular/core';
import { QuizService } from '../quiz.service';
import { Question } from './question';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'any',
})
@Component({
  selector: 'questions',
  templateUrl: './questions.component.html',
  styleUrl: './questions.component.css'
})
export class QuestionsComponent implements OnInit{

  public questions: Question[];
  public category: string = " ";
  clickEventSubscription:Subscription;
  constructor(private quizService: QuizService) {
    /*this.clickEventSubscription= this.quizService.getClickEvent().subscribe(()=>{
      this.getAllQuestions();
    })*/
  }
  ngOnInit(): void {
    this.getAllQuestions();
  }
  public getAllQuestions(): void{
    this.quizService.getAllQuestions().subscribe(
      (response: Question[]) =>{
        this.questions = response
        // this.category = this.questions[0].category.toString();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

}
