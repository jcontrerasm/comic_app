import { Component, OnInit } from '@angular/core';
import { HeroesService , Heroe } from '../../services/heroes.service';
import { ActivatedRoute , Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

	heroes:Heroe[] = [];
	texto:string;

  constructor( private _heroesService:HeroesService ,
  			   private activatedRouter:ActivatedRoute , 
  			   private router:Router ) {
  	this.activatedRouter.params.subscribe( params => {
  		this.texto = params['texto'];
  		this.heroes = this._heroesService.buscarHeroes( this.texto );
  		console.log(this.heroes.length);
  	});
  }

  ngOnInit() {
  }

  verDetalle(id:number){
    this.router.navigate(['/heroes/heroe/',id]);
  }

}
