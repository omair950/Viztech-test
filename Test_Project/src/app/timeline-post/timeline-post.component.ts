import { Component, OnInit } from '@angular/core';
import { TimelineService } from '../service/timeline-service';

import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-timeline-post',
  templateUrl: './timeline-post.component.html',
  styleUrls: ['./timeline-post.component.css']
})
export class TimelinePostComponent implements OnInit {
id:any;
userid:any;
title:any;
body:any;
username:any;
useremail:any;
comment_body:any;
comment_email:any;
commentArray: any;
postComment: any = [];
  constructor(private ts : TimelineService , private route: ActivatedRoute ) { }

  ngOnInit() {



  this.route.params.subscribe(params => {
    this.ts.getsinglePost(params['id'])
    .subscribe((data: any) => {
this.id=data.id;
this.userid= data.userId;
this.title=  data.title;
this.body=  data.body;


this.ts.getuserdetails(this.userid)
.subscribe((data: any) => {
  this.username = data.name;
  this.useremail= data.email;


  this.ts.getcommentbypost()
    .subscribe((data: any) => {
    
     this.commentArray = data;
     this.commentArray.map((comment) => {
       if(comment.postId == this.id) {
        this.postComment.push(comment)
       }
     })
    //  console.log(this.postComment)
      
    });

});
   });



    });

  
    
  }
  

}
