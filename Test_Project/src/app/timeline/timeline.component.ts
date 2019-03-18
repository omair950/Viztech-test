import { Component, OnInit } from '@angular/core';
import { TimelineService } from '../service/timeline-service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})

export class TimelineComponent implements OnInit {

  timeline_data=[];
  allUser:any=[];
  constructor( private ts : TimelineService) { }

  ngOnInit() {

    this.ts.getalluserdetails()
    .subscribe((data: any) => {
  
      this.allUser= data;
      //  console.log(this.allUser)


      this.ts.getallPosts()
      .subscribe((data: any) => {
        this.timeline_data = data;
       
        this.timeline_data.map((post) => {
          this.allUser.map((user) => {
            if (post.userId == user.id) {
              // console.log(user.name)
              post.author = user;
            }
          })
        })
     
        // console.log(  this.timeline_data)
       
    });
  
    });
   

 
  
  
  }

}
