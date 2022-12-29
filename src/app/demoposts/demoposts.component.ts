import { Component, OnInit } from '@angular/core';
import { Post } from '../model/post';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-demoposts',
  templateUrl: './demoposts.component.html',
  styleUrls: ['./demoposts.component.css']
})
export class DemopostsComponent implements OnInit {


  arrPosts:Post[]=[];
  constructor(private _postService:PostService) { }

  ngOnInit() {

    this._postService.getPosts().subscribe(res=>{

      this.arrPosts=res;
        
        console.log("Getting Posts",res);
      
        
    })
  }

}
