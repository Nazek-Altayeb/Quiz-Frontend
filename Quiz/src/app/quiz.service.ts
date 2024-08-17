import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Quiz } from './quiz/quiz';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { Question } from './questions/question';


@Injectable({
  providedIn: 'root'
})
export class QuizService {


  quizObject: any[] = [];
  quizlength: any;
  response : any;
  lastObject: Quiz = new Quiz;
  private apiUrl=environment.apiBaseUrl;
  private serverUrl=environment.serverurl;
  constructor(private http: HttpClient) { }
  
    public addQuizdetails(quiz:Quiz){
      let quizObject: Quiz[] =[];
      quizObject.push(quiz);
      // this.deleteQuizDetails();
      

       let newObject =  this.http.post(`${this.serverUrl}/quiz`, quiz).
       subscribe(data => {console.log('Post request is successful', data)},
                error =>{ console.log('Error', error);});     

      /*let lstObj = this.getLastObject()
       console.log("last object" + lstObj); // print the last object in the db.json*/

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

    /** suppose to clear the db.json file  */
    public deleteQuizDetails(){

      this.http.get(`${this.serverUrl}/quiz`).subscribe((response: any )=>{
        
        for( let element  in response){
            // delete response[element.valueOf()]; // the items are not being deleted !
           // arrRemove(response, response[element.valueOf()]) 
            /*let delElem = response[element.valueOf()]
            response.prototype.remove = function (delElem:Quiz) {
            return this.filter((f: Quiz) => f != delElem) )};*/
            //console.log("response[element] : " + response[element.valueOf()]);
        }
      });
      }
    
    public getAllQuestions(): Observable<Question[]>{
          return this.http.get<Question[]>(`${this.apiUrl}/quiz/allQuestions`)
    }
}
