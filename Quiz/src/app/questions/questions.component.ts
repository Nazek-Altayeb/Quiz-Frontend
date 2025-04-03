import { HttpErrorResponse } from '@angular/common/http';
import { Component, Injectable, OnInit, Input } from '@angular/core';
import { QuizService } from '../quiz.service';
import { Question } from './question';

@Injectable({
  providedIn: 'any',
})
@Component({
  selector: 'questions',
  templateUrl: './questions.component.html',
  styleUrl: './questions.component.css'
})
export class QuestionsComponent implements OnInit{

  public questions: Question[] | undefined;
 
  public amountOfQuestions: number= 0;
  public category:any;
  public intervalId : any;
  public quizDuration :any;
  public minutes : any ='0'+0;
  public seconds : any='0'+0; 

  
  constructor(private quizService: QuizService) {  }

  ngOnInit(): void {
    this.getAllQuestions();
    this.startStopWatch();
    this.category = this.quizService.getCategory();
    this.amountOfQuestions = this.quizService.getAmountOfQuestions();
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

  public startStopWatch(): void{
    this.amountOfQuestions = this.quizService.getAmountOfQuestions();
      
    this.intervalId = setInterval(() => {
      this.seconds++;
      this.seconds = this.seconds < 10 ? '0' + this.seconds : this.seconds;
      
      if(this.seconds == 60){
        this.minutes++;
        this.minutes = this.minutes < 10 ? '0' + this.minutes : this.minutes;
        this.seconds = '0'+ 0;
      }

    }, 1000);
  }

  public stopTimer() {
    clearInterval(this.intervalId);
  }

}
