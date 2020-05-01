import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ArticleService } from '../article.service';
import { NgForm } from '@angular/forms';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Article } from '../models/article';
import { identifierModuleUrl } from '@angular/compiler';
import { ArticleComponent } from '../article/article.component';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-article-creation',
  templateUrl: './article-creation.component.html',
  styleUrls: ['./article-creation.component.css']
})
export class ArticleCreationComponent implements OnInit {

  
  newArticle: Article = {
    id: null,
    title: '',
    content: '',
    authors: ''
  };


  


  articleForm : FormGroup;

  @Output()
  createdArticle : EventEmitter<Article>= new EventEmitter();


  constructor(private articleService: ArticleService, private fb: FormBuilder) {
    this.articleForm = this.fb.group({
      id: Math.random()*(1000000-1)+1,
      title: ['', Validators.required ],
      content : ['', Validators.required ],
      authors : ['', Validators.required ],
    });
  }

  private atcl: Observable<Article[]>;
  
  articles(): Observable<Article[]> {
    return this.atcl;
  }

  ngOnInit() {
    this.atcl=this.articleService.get();
  }


 

  CreateArticle(creationForm: NgForm) {
    if (creationForm.valid) {
      this.newArticle = {
        ...this.articleForm.value
      }
      this.articleService.post(this.newArticle).subscribe(  res=> {
        this.createdArticle.emit(res);
        this.atcl = this.articleService.get()
        });

        this.articleForm = this.fb.group({
          title: ["", null],
          content: ["", null],
          authors: ["", null],
        });
    }
  }


}
