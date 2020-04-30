import {Component, OnInit} from '@angular/core';
import {Article} from "../models/article";
import { ArticleService } from '../article.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  private _a: Observable<Article[]>;

  constructor(private articleService: ArticleService) {
  }

  articles(): Observable<Article[]> {
    return this._a;
  }

  ngOnInit() {
    this._a = this.articleService.get();
  }

  delete({id}: Article){
    this.articleService.delete(id).subscribe(() => {
      this._a = this.articleService.get();
    });
  }

}

