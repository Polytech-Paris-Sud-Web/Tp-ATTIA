import {Component, OnInit} from '@angular/core';
import {Article} from "../models/article";
import { ArticleService } from '../article.service';
import { Observable } from 'rxjs/Observable';
import { NgForm } from '@angular/forms';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  private _a: Observable<Article[]>;

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
    return this._a;
  }

  ngOnInit() {
    this.getArticle()
  }

  getArticle(){
    this._a = this.articleService.get();
  }

  delete({id}: Article){
    this.articleService.delete(id).subscribe(() => {
      this.getArticle()
    });
  }


  createdArticle(creationForm: NgForm) {
    console.log("vvvv");
    this.getArticle()
    /*if (creationForm.valid) {
      this.newArticle = {
        ...this.articleForm.value
      }
      this.articleService.post(this.newArticle).subscribe(res => {
        console.log("xxxx",res);
        //this._a = this.articleService.get()
        this.getArticle()
        });
    }*/
  }
 

}

