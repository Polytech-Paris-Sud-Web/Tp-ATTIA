import {Component, Input, OnInit, Output} from '@angular/core';
import {Article} from '../models/article';
import { ArticleService } from '../article.service';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @Input()
  article: Article;

  @Output()
  deletedArticle : EventEmitter<Article>  = new EventEmitter();

  constructor(private articleService : ArticleService) {
  
  }

  ngOnInit() {
  }

  delete(){
    this.deletedArticle.emit(this.article);
  }


}
