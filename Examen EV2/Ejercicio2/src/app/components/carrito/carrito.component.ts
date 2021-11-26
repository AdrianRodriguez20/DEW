import { Component, OnInit } from '@angular/core';
import { Article } from '../../interfaces/article';
import { CarritoService } from '../../services/carrito.service';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  public articles: Article[] = [];
  public totalCesta:number;
  constructor(
    private route: ActivatedRoute,
    private carritoService: CarritoService,
    private routerR: Router
  ) {

    this.routerR.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    }
  }

  ngOnInit(): void {
    this.list()
  }

 list():void{
  this.carritoService.getList().subscribe(articles => this.articles = articles.filter(article=>article.quantity>0));
 }

  remove(article:Article): void{
    article.quantity=article.quantity-1;

    this.carritoService.addArticle(article).subscribe();
    this.total();

  }

  add(article): void{
    article.quantity=article.quantity+1;
    this.carritoService.addArticle(article)
      .subscribe();
      this.total();
  }

 
   total():void{
    this.carritoService.getList().subscribe(articles => this.articles = articles.filter(article=>article.quantity>0));
    this.totalCesta=0;
    console.log("Hola")
    console.log(this.articles.length)
    for(let article of this.articles){
      console.log("hola"+article)
      this.totalCesta+=Number(article.price)*Number(article.quantity);
     }
     document.getElementById("resultado").innerHTML="Subtotal: "+this.totalCesta.toFixed(2)+" €"

  }




   
}
