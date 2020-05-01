import {Component, OnInit} from '@angular/core';
import {Article} from "../models/article";
import { ArticleService } from '../article.service';
import { Observable } from 'rxjs';
import { NgForm } from '@angular/forms';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  private _article: Observable<Article[]>;

  newArticle: Article = {
    id: null,
    title: '',
    content: '',
    authors: ''
  };

  articleForm : FormGroup;

  constructor(private articleService: ArticleService) {
  }

  articles(): Observable<Article[]> {
    return this._article;
  }

  ngOnInit() {
    this.getArticle()
  }

  getArticle(){
    this._article = this.articleService.get();
  }

  delete({id}: Article){
    this.articleService.delete(id).subscribe(() => {
      this.getArticle()
    });
  }


  createdArticle(creationForm: NgForm) {
    this.getArticle()
  }
 

}

