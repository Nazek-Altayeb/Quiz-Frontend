import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Quiz } from './quiz/quiz';
import { BehaviorSubject, Observable} from 'rxjs';
import { environment } from '../environments/environment';
import { Question } from './questions/question';


@Injectable({
  providedIn: 'root'
})
export class QuizService {

  response : any;
  quiz: Quiz = new Quiz;
  private apiUrl=environment.apiBaseUrl;

  private category : any;
  private amountOfQuestions: any;

  public quizDetails: Quiz = new Quiz;

  constructor(private http: HttpClient) { }


  public postQuizdetails(quiz:Quiz){
    this.http.post(`${this.apiUrl}/quiz/quizDetails`, quiz).subscribe((data: any) => {
      console.log(data);
   });
   
  } 

  public getAllQuestions(): Observable<Question[]>{       
         return this.http.get<Question[]>(`${this.apiUrl}/quiz/allQuestions`)
  }

  public setCategory(quiz:Quiz){
    this.category = quiz.category;
  }

  public getCategory(){
    return this.category;
  }


  public setAmountOfQuestions(quiz:Quiz){
    this.amountOfQuestions = quiz.amountOfQuestions;
  }

  public getAmountOfQuestions(){
    return this.amountOfQuestions;
  }


}
