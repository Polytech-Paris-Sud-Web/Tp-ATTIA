import {Component, OnInit} from '@angular/core';
import {Article} from "../models/article";
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  public articles: Article[];

  constructor(private articleService :ArticleService ) {
  }



  ngOnInit() {
    this.articleService.get().subscribe((articles: Article[]) => {
      this.articles = articles;
    });
  }

  delete({id} : Article){
    this.articleService.delete(id).subscribe(()=>{
      this.articleService.get().subscribe(a =>{
        this.articles = a;
      });
    });
  }

}
