import { HttpErrorResponse } from '@angular/common/http';
import { Component, Injectable, OnInit, Input } from '@angular/core';
import { QuizService } from '../quiz.service';
import { Question } from './question';
import { elementAt } from 'rxjs';

@Injectable({
  providedIn: 'any',
})
@Component({
  selector: 'questions',
  templateUrl: './questions.component.html',
  styleUrl: './questions.component.css'
})
export class QuestionsComponent implements OnInit{

  public questions: Array<Question> = [];
  public amountOfQuestions: any;
  public category:any;
  public intervalId : any;
  public minutes : any ='0'+0;
  public seconds : any='0'+0; 
  public quizDuration : number= 0;
  public questionId : number = 0;
  public questionDetails: any;
  public incorrectAnswers: string[] = [];
  public correctAnswer: string= '';
  public answerOptions: string[] = [];
  public questionText: string = '';
  public ques:  string = '';
  public ans:  string = '';
   

  
  constructor(private quizService: QuizService) {  }

  ngOnInit(): void {
   // this.getAllQuestions();
   //this.dislayQuizData(); 
    this.startTimer();
    this.category = this.quizService.getCategory();
    this.amountOfQuestions = this.quizService.getAmountOfQuestions();
    this.getOneQuestionAtAtime();   
  }


  /**public getAllQuestions(): void{
    this.quizService.getAllQuestions().subscribe(
      (response: Question[]) =>{
        this.questions = response       
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    ) 
  }*/

  public dislayQuizData(): void{
    this.quizService.getAllQuestions().subscribe(
      (questions: Question[]) =>{
        questions.forEach((question : Question) => {   
          /**
           * create a question-answers elemnt, then append the data. 
           */
         this.displayQuestionAndAnswers(question);
             
        })      
      }
    ) 
  }

  public getOneQuestionAtAtime(){
    
    this.quizService.getAllQuestions().subscribe(
      (questions: Question[]) =>{
      let length = questions.length;
      let iterator = 0;
       console.log("question key : " + Object.keys(questions)[iterator])  
       this.displayQuestionAndAnswers(questions[iterator])
       /**
        * while(submit answer button is clicked  && not all questions are answered){
              display the next question
        }         
        *  */ 
      }
    ) 
  }
  

  public displayQuestionAndAnswers(question :Question){
    /**
     * create a question elemnt, then append the question. 
     */
    let questionArea = document.getElementById("question")
    let questionText = document.createElement("h4");
    let parsedQuestion = this.quizService.htmlDecode(question.question);
    questionText.textContent = parsedQuestion;         
    questionArea?.appendChild(questionText);  
    // this.ques = questionText.innerText;
    console.log("question :  "+ questionText.innerText);
    /** 
     * add the incorrect answers to  a list 
     * */
    this.incorrectAnswers = question.incorrect_answers; 
    /**
     * create answers elemnts, then append the answers list(correct and incorrect answers). 
     */
    this.answerOptions = this.incorrectAnswers;
    this.correctAnswer = question.correct_answer;  
    this.answerOptions.splice(Math.floor(Math.random() * 4), 0, this.correctAnswer);
    this.answerOptions.forEach((answer) =>{          
    let answersArea = document.getElementById("answers");
    let paragraph = document.createElement("p")
    let span = document.createElement("span")
    let parsedAnswer = this.quizService.htmlDecode(answer);
    span.textContent = parsedAnswer;
    console.log("answer : "+span.innerText)          
    paragraph.appendChild(span);          
    answersArea?.appendChild(paragraph); 
    // this.ans = paragraph.innerText;          
    })  
  }
  
  
  public startTimer(): void{
    this.intervalId = setInterval(() => {
      this.checkIfTimeEnds(); 
      this.seconds++;
      this.seconds = this.seconds < 10 ? '0' + this.seconds : this.seconds;
      
      if(this.seconds == 60){              
        this.minutes++;  
        this.quizDuration = this.minutes;            
        this.minutes = this.minutes < 10 ? '0' + this.minutes : this.minutes;
        this.seconds = '0'+ 0;
      }    

    }, 1000);
  }


  public stopTimer() {
      clearInterval(this.intervalId); 
  }


  public checkIfTimeEnds(){
    if(this.amountOfQuestions == this.quizDuration){
      this.stopTimer();
    }
  }

}
