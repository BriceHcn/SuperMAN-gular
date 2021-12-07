import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamePageComponent } from './component/game-page/game-page.component';
import { RandomPageComponent } from './component/random-page/random-page.component';

const routes: Routes = [
  { path: '', component: GamePageComponent },
  { path: 'random_hero', component: RandomPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
