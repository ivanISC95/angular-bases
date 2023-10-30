import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid'

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  constructor() { }

  public characters : Character[] = [
    { id: uuid(),name:'krilin',power: 1000},
    { id: uuid(),name:'goku', power:9500},
    { id: uuid(),name:'Vegeta',power:7500}
  ];
  addCharacter(character:Character):void{
    // console.log('main page');
    // console.log(character);
    // crear un nuevo personaje con sus elementos
    // const newCharacter:Character = {
    //   id : uuid(),
    //   name : character.name,
    //   power : character.power
    // }
    // forma de crear un personaje pero con un operador sprep ...
    const newCharacter:Character = {id : uuid(),...character}

    this.characters.push(newCharacter);
  }
  onDeleteCharacter(index:number):void{
    // console.log('main page ondelete')
    // console.log(index)
    this.characters.splice(index,1)
  }
  deleteCharacterById(id:string):void{
    console.log('funcion' ,id)
    this.characters = this.characters.filter(character => character.id !== id)
  }
}
