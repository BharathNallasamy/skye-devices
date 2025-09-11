import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './common/home-page/home-page.component';
import { FinalPageComponent } from './common/final-page/final-page.component';
import { ShopPageComponent } from './common/shop-page/shop-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  { path: 'shop', component: ShopPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
