import { Routes } from '@angular/router';
import { CharacterComponent } from './pages/character/character.component';
import { ProductsComponent } from './pages/products/products.component';

export const routes: Routes = [
    { path: 'characters', component: CharacterComponent },
    { path: 'products', component: ProductsComponent },
];
