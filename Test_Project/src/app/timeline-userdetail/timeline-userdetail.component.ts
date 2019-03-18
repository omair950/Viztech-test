import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TimelineService } from '../service/timeline-service';
@Component({
  selector: 'app-timeline-comment',
  templateUrl: './timeline-userdetail.component.html',
  styleUrls: ['./timeline-userdetail.component.css']
})
export class TimelineCommentComponent implements OnInit {
  single_user_data:any=[];
  single_user_data_city:any;
  constructor(private ts : TimelineService , private route: ActivatedRoute ) { }

  ngOnInit() {
      this.ts.getuserdata()
    .subscribe((data: any) => {
      this.single_user_data = data;
this.single_user_data_city=data.address.city

 });

  }

}
