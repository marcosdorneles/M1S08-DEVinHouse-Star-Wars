import { Component, OnInit } from '@angular/core';
import { PersonagemServiceService } from 'src/app/personagem-service.service';
import { PersonagemClass } from './personagem-class';

@Component({
  selector: 'app-star-wars',
  templateUrl: './star-wars.component.html',
  styleUrls: ['./star-wars.component.css']
})
export class StarWarsComponent implements OnInit{

  public personagens: PersonagemClass[] = []
  constructor(private _service: PersonagemServiceService){}

  ngOnInit(): void {
      this._service.getPersonagens().subscribe(
        (res) =>{
          this.personagens = res
        }
      )
  }

  public getPersonagensFromService(){

  }
}
