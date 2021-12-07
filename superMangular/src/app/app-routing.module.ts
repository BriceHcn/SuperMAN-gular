import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamePageComponent } from './component/game-page/game-page.component';
import { RandomPageComponent } from './component/random-page/random-page.component';
import { SearchPageComponent } from './component/search-page/search-page.component';

const routes: Routes = [
  { path: '', component: GamePageComponent },
  { path: 'random_hero', component: RandomPageComponent },
  { path: 'search_hero', component: SearchPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
