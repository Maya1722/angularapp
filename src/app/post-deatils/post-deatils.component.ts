import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post-deatils',
  templateUrl: './post-deatils.component.html',
  styleUrls: ['./post-deatils.component.css']
})
export class PostDeatilsComponent implements OnInit {

  constructor(private _postService:PostService,private route:ActivatedRoute) { }
    data:any;
  ngOnInit() {
  
 let id=this.route.snapshot.params['id'];
 
this._postService.getPostById(id).subscribe(res=>{

 console.log('get post by id',res);
     this.data=res;
})
  } 
}
