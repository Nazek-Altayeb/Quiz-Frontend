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
  public minutes : any;
  public seconds : any;  
  public countDown: any;
  public countDownTimer:any;

  
  constructor(private quizService: QuizService) {  }

  ngOnInit(): void {
    this.getAllQuestions();
    this.startCountDown();
    this.setInterval();
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

  public startCountDown(){
    this.countDown = () => {

      this.quizDuration = this.amountOfQuestions*60;   
      this.minutes = Math.floor(this.quizDuration / 60);
      this.seconds = this.quizDuration % 60;
  
       this.countDownTimer = document.querySelector('#count-down-timer');
      if(this.countDownTimer)
      {
        this.countDownTimer.textContent = `${this.minutes}` +':'+ `${this.seconds}`;
      }
      this.quizDuration--;
    };
    console.log(" minutes :"+this.minutes)
    console.log("seconds :"+this.seconds)
    console.log("quiz duration :" +this.quizDuration)
  }

  public setInterval(){
    this.intervalId = setInterval(() => {
      this.countDown;
    }, 1000);
  }

  

  public stopCountDown() {
    clearInterval(this.intervalId);
  }

}
