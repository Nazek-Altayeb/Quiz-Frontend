import { Component, OnInit } from '@angular/core';
import { QuizComponent } from './quiz/quiz.component';
import { Question } from './questions/question';
import { QuizService } from './quiz.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'Quiz';
  public questions: Question[];

  constructor(private quizService: QuizService){}
  ngOnInit(): void {
    this.getAllQuestions();
  }

  public getAllQuestions(): void{
    this.quizService.getAllQuestions().subscribe(
      (response: Question[]) =>{
        this.questions = response
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    )
  }
}
