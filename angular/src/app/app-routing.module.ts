import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PrincipesBaseComponent } from './principes-base/principes-base.component';
import { AccueilComponent } from './accueil/accueil.component';
import { BddComponent } from './bdd/bdd.component';
import { MaterialComponent } from './material/material.component';

const routes: Routes = [
  { path: 'principebase', component: PrincipesBaseComponent },
  { path: 'bdd', component: BddComponent },
  { path: 'material', component: MaterialComponent },
  { path: '', component: AccueilComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
