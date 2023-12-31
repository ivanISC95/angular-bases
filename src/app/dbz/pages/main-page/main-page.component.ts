import { Component } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { DbzService } from '../../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {
  // inyeccion de dependencias , siempre deben ser privadas por seguridad
  constructor(private dbzService:DbzService){}
  get characters():Character[]{
    return [...this.dbzService.characters]
  }
  onDeleteCharacter(id:string):void{
    this.dbzService.deleteCharacterById(id)
  }
  onNewCharacter(character:Character){
    this.dbzService.addCharacter(character)
  }

}
