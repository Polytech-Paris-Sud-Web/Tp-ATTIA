import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from './models/article';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ArticleService {

  constructor(private http: HttpClient) { 
    
  }

  public get() : Observable<Article[]>{
    return this.http.get<Article[]>('http://localhost:3000/articles/');
  }
  public delete(id:number): Observable<void>{
    return this.http.delete<void>(`http://localhost:3000/articles/${id}`);
  }
  public post(article: Article): Observable<Article> {
    return this.http.post<Article>(`http://localhost:3000/articles`, article);
  }
  public read(id: number): Observable<Article> {
    return this.http.get<Article>(`http://localhost:3000/articles/${id}`);
  }
}

