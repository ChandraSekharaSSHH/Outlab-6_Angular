import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders  } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import {catchError, retry ,tap } from 'rxjs/operators';

import { formtype } from './formtype';

@Injectable({
  providedIn: 'root'
})
export class FormdataserviceService {
  private geturl='https://cs251-outlab-6.herokuapp.com/initial_values/';
  private posturl=' https://cs251-outlab-6.herokuapp.com/add_new_feedback/';
  constructor(private http:HttpClient) { }

  get_defaultdata():Observable<formtype>{
    return this.http.get<formtype>(this.geturl);
  }

  post_data(data:any):Observable<formtype>{
    
    return this.http.post<any>(this.posturl,data).pipe(
      tap(
        data => {
          console.log("successs");
          alert("form posted successfully");
        },
        error =>{
          console.log("fail");
          alert("form posting failed");
        }
        // () =>  catchError(this.handleError<formtype>('posting the data to the server failed!!',{name:'',email:'',feedback:'',comment:''}))
      ));
      
  };
  
  // private success(data): void{
  //   console.log('success');
  //   alert('posting successful');
  // }
  // private fail()
  // private handleError<T>(operation= 'operation' ,result?:T){
  //   console.log('fail');
  //   alert('posting failed');
  //   return (error:any): Observable<T> =>{
  //     return of(result);
  //   };
  // }

}
