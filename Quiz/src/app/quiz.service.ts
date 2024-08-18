import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Quiz } from './quiz/quiz';
import { Observable, Subject } from 'rxjs';
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
  private serverUrl=environment.serverurl;

  constructor(private http: HttpClient) { }

  private subject = new Subject<any>();

  sendClickEvent(){
    this.subject.next('');

  }

  getClickEvent():Observable<any>{
     return this.subject.asObservable();
  }


  public addQuizdetails(quiz:Quiz){

      let newObject =  this.http.post(`${this.serverUrl}/quiz`, quiz).
      subscribe(data => {console.log('Post request is successful', data)},
              error =>{ console.log('Error', error);});     


    return newObject;
            
  } 
  /** (last object in the array of objects) the quiz details that should be sent to the backend */
  public getLastObject(){
    this.http.get(`${this.serverUrl}/quiz`).subscribe((response: any) => {
      let length = response.length
      console.log("length : " + length);
      let index = length-1;
      this.lastObject = response[index.valueOf()]; 
      console.log("last object: " + this.lastObject);
      return this.lastObject;  
      
    });
  }


  public getAllQuestions(): Observable<Question[]>{
       
         return this.http.get<Question[]>(`${this.apiUrl}/quiz/allQuestions`)
  }
}
