import { Component, OnInit } from '@angular/core';
import { Post } from './post';
import { PostService } from './post.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public posts: Post[];

  constructor(private postService: PostService) {

  }

  ngOnInit(): void{
      this.getPosts();
  }

  public splitArr(arr: Post[]) : Post[][] {
    let newArr: Post[][] = [];
    for(let i = 0; i< arr.length; i += 3) {
      newArr.push(arr.slice(i, i+3));
    }
    return newArr;
  }
  
  public getPosts(): void {
    this.postService.getPosts().subscribe(
      (response: Post[]) => {
        this.posts = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onOpenModal(post: Post, mode: string) : void {
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', 'addPostModal');
    }
    if (mode === 'add') {
      button.setAttribute('data-target', 'addPostModal');
    }
    if (mode === 'add') {
      button.setAttribute('data-target', 'addPostModal');
    }
  }
}
