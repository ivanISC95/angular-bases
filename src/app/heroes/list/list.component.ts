import { Component } from '@angular/core';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public heroNames : string [] = ['Spiderman','Hulk','SheHulk','Rocket','StarLord']
  public deleteHero ?: string
  removeLastHero():void{
    //const deletedHero = this.heroNames.pop()
    this.deleteHero = this.heroNames.pop()
    // console.log(deletedHero)
    console.log(this.deleteHero)
  }
}
