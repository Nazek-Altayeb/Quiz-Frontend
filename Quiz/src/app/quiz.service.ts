import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Quiz } from './quiz/quiz';
import { Observable} from 'rxjs';
import { environment } from '../environments/environment';
import { Question } from './questions/question';


@Injectable({
  providedIn: 'root'
})
export class QuizService {

  quizlength: any;
  response : any;
  lastObject: Quiz = new Quiz;
  private apiUrl=environment.apiBaseUrl;

  constructor(private http: HttpClient) { }


  public postQuizdetails(quiz:Quiz){

    this.http.post(`${this.apiUrl}/quiz/quizDetails`, quiz).subscribe((data: any) => {
      console.log(data);
   });
            
  } 


  public getAllQuestions(): Observable<Question[]>{
       
         return this.http.get<Question[]>(`${this.apiUrl}/quiz/allQuestions`)
  }
}
