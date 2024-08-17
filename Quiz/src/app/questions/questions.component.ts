import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { QuizService } from '../quiz.service';
import { Question } from './question';

@Component({
  selector: 'questions',
  templateUrl: './questions.component.html',
  styleUrl: './questions.component.css'
})
export class QuestionsComponent implements OnInit {

  public questions: Question[];
  public category: string = " ";
  constructor(private quizService: QuizService) {

  }
   
  ngOnInit(): void {
    // this.getAllQuestions();
  }
  public getAllQuestions(): void{
    this.quizService.getAllQuestions().subscribe(
      (response: Question[]) =>{
        this.questions = response
        this.category = this.questions[0].category.toString();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }

}
