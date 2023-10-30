import { Component,EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {
  // Emitir la variable onNewCharacter de este componente hijo al componente padre main
  @Output()
  public onNewCharacter : EventEmitter<Character> = new EventEmitter();
  public character: Character = {
    name:'',
    power:0
  }

  emitCharacter():void{
    if (this.character.name.length === 0) return;
    this.onNewCharacter.emit(this.character)
    // Se limpian las variables de name y power
    this.character = { name :'', power:0}
  }

}
