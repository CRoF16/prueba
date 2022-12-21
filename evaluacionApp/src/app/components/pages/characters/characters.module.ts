import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CharacterListComponent } from '@characters/character-list/character-list.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CharacterListComponent
  ],
  imports: [
    CommonModule,RouterModule, FormsModule
  ],
  exports: [CharacterListComponent],
})
export class CharactersModule { }
