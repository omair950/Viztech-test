import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TimelineCommentComponent } from './timeline-userdetail/timeline-userdetail.component';
import { TimelinePostComponent } from './timeline-post/timeline-post.component';
import { TimelineComponent } from './timeline/timeline.component';


const routes: Routes = [
  {
    path: 'timeline',
    component: TimelineComponent
  },
  {
    path: 'post/:id',
    component: TimelinePostComponent
  },
   {
    path: '**',
    component: TimelineComponent
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
