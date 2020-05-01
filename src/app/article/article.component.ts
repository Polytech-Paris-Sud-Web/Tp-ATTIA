import {Component, Input, OnInit, Output, OnDestroy} from '@angular/core';
import {Article} from '../models/article';
import { ArticleService } from '../article.service';
import { EventEmitter } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit, OnDestroy {

  id: number;
  private sub: any;

  @Input()
  article: Article;

  @Output()
  deletedArticle : EventEmitter<Article>  = new EventEmitter();
  newArticle : EventEmitter<Article> = new EventEmitter();

  constructor(private articleService : ArticleService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
   });

   
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  

  delete(){
    this.deletedArticle.emit(this.article);
  }

  
  CreateArticle(){
    this.newArticle.emit(this.article);
  }

  
  
}




