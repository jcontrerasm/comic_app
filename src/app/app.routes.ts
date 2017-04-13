import { RouterModule , Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { SearchComponent } from './components/search/search.component';
import { AboutComponent } from './components/about/about.component';

const APP_ROUTES: Routes = [
	{ path: 'home', component: HomeComponent },
	{ path: 'heroes', component: HeroesComponent },
	{ path: 'heroes/heroe/:id', component: HeroeComponent },
	{ path: 'heroes/search/:texto', component: SearchComponent },
	{ path: 'about', component: AboutComponent },
	{ path: '**', pathMatch: 'full' , redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);