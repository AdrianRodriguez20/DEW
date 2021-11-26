import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from '../../interfaces/article';
import { ArticleService } from '../../services/article.service';
import { CarritoService } from '../../services/carrito.service';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

   article: Article ;
  constructor(
    private route: ActivatedRoute,
    private articleService: ArticleService,
    private carritoService: CarritoService,
    private routerR: Router
  ) { 
    
    this.routerR.routeReuseStrategy.shouldReuseRoute=function(){
      return false;
    }
  }

  ngOnInit(): void {
    this.getArticle();
  }
  getArticle(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.articleService.getArticle(id)
      .subscribe(article => this.article = article);
  }

  show(): void{
    this.article.quantity=this.article.quantity+1;
    this.carritoService.addArticle(this.article)
      .subscribe();
  }

}
