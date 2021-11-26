import { Component, OnInit } from '@angular/core';
import { Article } from '../../interfaces/article';
import { ArticleService } from '../../services/article.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
public articles: Article[] = [];
  constructor(
        private route: ActivatedRoute,
        private articleService: ArticleService,
        private location: Location
  ) { }

  ngOnInit(): void {
    this.getListCategory()
  }

  getListCategory(): void {
    const categoryId = +this.route.snapshot.paramMap.get('categoryId');
    this.articleService.getListCategory(categoryId)
      .subscribe(articles => this.articles = articles);
  }
  goBack(): void {
    this.location.back();
  }
}
