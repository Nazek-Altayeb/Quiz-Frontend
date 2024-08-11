import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http: HttpClient) { }

    addQuizdetails(quiz:{amoutOfQuestions:number, inlineRadioOptions:any}){
      
       return this.http.post("http://localhost:3000/quiz", quiz).
       subscribe(data => {
        console.log('Post request is successful', data)
      },
    error =>{
      console.log('Error', error);
    });
    }  

}
