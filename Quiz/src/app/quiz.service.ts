import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, elementAt, retry } from 'rxjs/operators';
import { Quiz } from './question/questionModel';
import { arrRemove } from 'rxjs/internal/util/arrRemove';


@Injectable({
  providedIn: 'root'
})
export class QuizService {


  quizObject: any[] = [];
  quizlength: any;
  response : any;
  lastObject: Quiz = new Quiz;
  constructor(private http: HttpClient) { }
  
    addQuizdetails(quiz:Quiz){
      let quizObject: Quiz[] =[];
      quizObject.push(quiz);
      this.deleteQuizDetails();
      

       let newObject =  this.http.post("http://localhost:3000/quiz", quiz).
       subscribe(data => {console.log('Post request is successful', data)},
                error =>{ console.log('Error', error);});     

      let lstObj = this.getLastObject()
       console.log("last object" + lstObj);

      return newObject;
              
    } 
 
    getLastObject(){
      this.http.get("http://localhost:3000/quiz").subscribe((response: any) => {
        let length = response.length
        console.log("length : " + length);
        let index = length-1;
        this.lastObject = response[index.valueOf()]; // is returning an `Object` object  instead of the it's content
        console.log("last object: " + this.lastObject);
        
       
      });
    }


    deleteQuizDetails(){

      this.http.get("http://localhost:3000/quiz").subscribe((response: any )=>{
        
        for( let element  in response){
            // delete response[element.valueOf()]; // the items are not being deleted !
           // arrRemove(response, response[element.valueOf()]) 
            /*let delElem = response[element.valueOf()]
            response.prototype.remove = function (delElem:Quiz) {
            return this.filter((f: Quiz) => f != delElem) )};*/
            //console.log("response[element] : " + response[element.valueOf()]);
        }

      });
      /** log the last object */
      
      }
    
    
}
