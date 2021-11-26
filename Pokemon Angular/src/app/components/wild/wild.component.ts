import { Component, OnInit } from '@angular/core';
import {Pokemon } from '../../interfaces/pokemon';
import { WildService} from '../../service/wild.service';
import { LabService} from '../../service/lab.service';
@Component({
  selector: 'app-wild',
  templateUrl: './wild.component.html',
  styleUrls: ['./wild.component.css']
})
export class WildComponent implements OnInit {

 
  public pokemons: Pokemon[] = [];
  pokemon: Pokemon ;
  constructor(
    private wildService: WildService,
    private labService: LabService
  ) {}

  ngOnInit() {
    this.getPokemons();
  }

  getPokemons(): void {
    this.wildService.getPokemons()
      .subscribe(pokemons => this.pokemons = pokemons.sort(function (a, b) {
        if (a.pokemonNumber < b.pokemonNumber) {
          return 1;
        }
        if (a.pokemonNumber > b.pokemonNumber) {
          return -1;
        }
        // a must be equal to b
        return 0;
      }));
  }

  capturar(pokemon): void{
    pokemon.pokemonNumber=pokemon.pokemonNumber+100;
    this.labService.addLab(pokemon)
      .subscribe();
  }
}
