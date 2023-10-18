import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PostService } from './post.service';
import { FormsModule } from '@angular/forms';
import { PostpageComponent } from './postpage/postpage.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    PostpageComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'info/:id', component: PostpageComponent},
    ]),
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
