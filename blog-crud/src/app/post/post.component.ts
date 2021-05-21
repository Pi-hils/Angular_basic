import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Post } from '../post.model'
@Component({ 
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {


  postRef = new FormGroup({
    id: new FormControl(),
    pname: new FormControl(),
    blog_post: new FormControl()
  });

  constructor(public pser:PostService) { 
    console.log("Hiii...")
  }

  ngOnInit(): void {
  }

  storePost() {
    let post = this.postRef.value;
  }

}
