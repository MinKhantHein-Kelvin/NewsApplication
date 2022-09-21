import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private api_key = "eaa5e8926e7748fda81891f9a0756d62"

  constructor(private http : HttpClient) { }

  initSources(){
    return this.http.get(`https://newsapi.org/v2/sources?language=en&apiKey=${this.api_key}`);
  }

  initArticles(){
    return this.http.get(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${this.api_key}`)
  }

  getArticlesByID(source:any){
    return this.http.get(`https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${this.api_key}`)
  }
}
