import { Component, OnInit } from '@angular/core';
import { Post } from './post';
import { PostService } from './post.service';
import { HttpErrorResponse } from '@angular/common/http';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  public posts: Post[];
  public deletePost: Post;
  public editPost: Post;

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

  public onAddPost(addForm: NgForm): void {
    console.log(addForm.value);
    if (addForm.value.name === "" || addForm.value.name === null) {
      addForm.value.name = "Anonymous";
    }
    document.getElementById('add-post-form')?.click();
    this.postService.addPost(addForm.value).subscribe(
      (response: Post) => {
        console.log(response);
        this.getPosts();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
 }

 public onDeletePost(post: Post): void {
  document.getElementById('delete-post-form')?.click();
  this.postService.deletePost(post.id).subscribe(
    (response: void) => {
      console.log(response);
      this.getPosts();
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
    }
  );
}

public onUpdatePost(editForm: NgForm): void {
  document.getElementById('edit-post-form')?.click();
  if (editForm.value.name === "" || editForm.value.name === null) {
    editForm.value.name = "Anonymous";
  }
  editForm.value.id = this.editPost.id;
  this.postService.updatePost(editForm.value).subscribe(
    (response: Post) => {
      console.log(response);
      this.getPosts();
      editForm.reset();
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
      editForm.reset();
    }
  );
}

public setDeletePost(post: Post): void {
  this.deletePost = post;
}

public setEditPost(post: Post): void {
  this.editPost = post;
}
 /*
  public onOpenModal(post: Post, mode: string) : void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', 'addPostModal');
    }
    if (mode === 'edit') {
      button.setAttribute('data-target', 'editPostModal');
    }
    if (mode === 'delete') {
      button.setAttribute('data-target', 'deletePostModal');
    }
    container?.appendChild(button);
  }
  */
}
