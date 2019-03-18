import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TimelineService {



  constructor(private http: HttpClient) { }
 
  getallPosts() {
    return this
           .http
           .get(`https://jsonplaceholder.typicode.com/posts`);
  }
  getsinglePost(id) {
    return this
           .http
           .get(`https://jsonplaceholder.typicode.com/posts/${id}`);
  }
  getuserdata() {
    return this
           .http
           .get(`https://jsonplaceholder.typicode.com/users/1`);
  }
  getuserdetails(userid){
    return this
           .http
           .get(`https://jsonplaceholder.typicode.com/users/${userid}`);

  }
  getalluserdetails(){
    return this
           .http
           .get(`https://jsonplaceholder.typicode.com/users`);

  }
  getcommentbypost(){
    return this
           .http
           .get(`https://jsonplaceholder.typicode.com/comments`);

  }
  
}