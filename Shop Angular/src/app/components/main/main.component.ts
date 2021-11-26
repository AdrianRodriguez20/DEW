import { Component, OnInit } from '@angular/core';
import { Article } from '../../interfaces/article';
import { ArticleService } from '../../services/article.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: [ './main.component.css' ]
})
export class MainComponent implements OnInit {
  
  public articles: Article[] = [];

  constructor(
    private ArticleService: ArticleService
  ) {}

  ngOnInit() {
    this.getArticles();
  }

  getArticles(): void {
    this.ArticleService.getArticles()
      .subscribe(articles => this.articles = articles);
  }

}
