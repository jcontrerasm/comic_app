import { Component, OnInit } from '@angular/core';
import { HeroesService , Heroe } from '../../services/heroes.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {
  
  heroe:Heroe [] = [];

  constructor( private _heroeService:HeroesService ,
               private activatedRoute:ActivatedRoute,
               private location:Location) {
  	this.activatedRoute.params.subscribe( params => {

  		this.heroe = this._heroeService.getHeroe( params['id'] );
  		console.log(this.heroe);

  	});
  }

  ngOnInit() {
  }

  regresar(){
    this.location.back();
  }

}
