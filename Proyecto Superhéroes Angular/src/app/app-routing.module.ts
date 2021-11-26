import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeroesComponent } from './components/hero/heroes/heroes.component';
import { HeroDetailComponent } from './components/hero/hero-detail/hero-detail.component';
import { VillainsComponent } from './components/villain/villains/villains.component';
import { VillainDetailComponent } from './components/villain/villain-detail/villain-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detailHero/:id', component: HeroDetailComponent },
  { path: 'detailVillain/:id', component: VillainDetailComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'villains', component: VillainsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
