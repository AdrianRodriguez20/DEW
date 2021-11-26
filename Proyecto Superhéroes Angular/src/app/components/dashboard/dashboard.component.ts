import { Component, OnInit } from '@angular/core';
import { Hero } from '../../interfaces/hero';
import { Villain } from '../../interfaces/villain';
import { HeroService } from '../../services/hero.service';
import { VillainService } from '../../services/villain.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  villains: Hero[] = [];
  constructor(private heroService: HeroService,private villainService: VillainService) { }

  ngOnInit() {
    this.getHeroes();
    this.getVillains();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(0, 10));
  }
  getVillains(): void {
    this.villainService.getVillains()
      .subscribe(villains => this.villains = villains.slice(0, 10));
  }
  
}
