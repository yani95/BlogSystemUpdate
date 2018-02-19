import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import 'hammerjs';

import { AppComponent } from './app.component';
import { ArticleModel } from './article/article.model';
import { ArticleComponent } from './article/article.component';
import { ArticlesListComponent } from './articles-list/articles-list.component';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import { ArticleFormComponent } from './article-form/article-form.component';
import { ArticlesControllerComponent } from './articles-controller/articles-controller.component';
import { ArticleService } from './services/article.service';
import { ArticlesFilterPipe } from './pipes/articles-filter.pipe';
import { ArticlesSortingPipe } from './pipes/articles-sorting.pipe';
import { PublicArticlesListComponent } from './public-articles-list/public-articles-list.component';
import { PrivateComponent } from './private/private.component';
import { CommentModel } from './comment/comment.model';
import { CommentComponent } from './comment/comment.component';
import { CommentsListComponent } from './comments-list/comments-list.component';
import { CommentFormComponent } from './comment-form/comment-form.component';
import { CommentsControllerComponent } from './comments-controller/comments-controller.component';
import { CommentService } from './services/comment.service';
import { UserFormComponent } from './user-form/user-form.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserService } from './services/user.service';
import { UserLoginComponent } from './user-login/user-login.component';
import { LoggedInGuard } from './logged-in.guard';
import { AuthenticationService } from './services/authentication.service';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpModule,
        ReactiveFormsModule,       
        MatCardModule,   
        MatInputModule,
        routing
    ],
    exports: [
        MatCardModule,
        MatInputModule
    ],
    declarations: [
        AppComponent,
        ArticleComponent,
        ArticlesListComponent,
        ArticleDetailsComponent,
        ArticleFormComponent,
        ArticlesControllerComponent,
        ArticlesSortingPipe,
        ArticlesFilterPipe,
        CommentComponent,
        CommentsListComponent,      
        CommentFormComponent,       
        CommentsControllerComponent,
        UserFormComponent,
        UserDetailsComponent,       
        UserLoginComponent,
        PrivateComponent,
        PublicArticlesListComponent
    ],
    providers: [
       ArticleService,
       CommentService,
       UserService,
       AuthenticationService,
       LoggedInGuard
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }