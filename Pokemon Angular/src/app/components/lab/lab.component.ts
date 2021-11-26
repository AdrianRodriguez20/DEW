import { Component, OnInit } from '@angular/core';
import {Pokemon } from '../../interfaces/pokemon';
import { LabService} from '../../service/lab.service';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-lab',
  templateUrl: './lab.component.html',
  styleUrls: ['./lab.component.css']
})
export class LabComponent implements OnInit {

  public pokemons: Pokemon[] = [];
  public totalCesta:number;
  constructor(
    private route: ActivatedRoute,
    private labService: LabService,
    private routerR: Router
  ) {

    this.routerR.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    }
  }

  ngOnInit(): void {
    this.list();
    this.name();
  }

  remove(pokemon:Pokemon): void{
    pokemon.pokemonNumber=pokemon.pokemonNumber-200;
    this.labService.addLab(pokemon).subscribe();

  }


  list():void{
    this.labService.getList().subscribe(pokemons => this.pokemons = pokemons.filter(pokemon=>pokemon.pokemonNumber>200));
   }

 name():void{
   if (document.getElementById("nombre").innerHTML==""){
    document.getElementById("nombre").innerHTML="-";
   }
 }
   

}
