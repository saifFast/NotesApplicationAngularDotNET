import { Component } from '@angular/core';
import {Note} from '../models/note';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-notes',
  imports: [FormsModule, CommonModule],
  templateUrl: './notes.component.html',
  styleUrl: './notes.component.css'
})




export class NotesComponent {

  notes : Note[] = [];
  noteTitle : string = '';
  noteContent: string = '';


  addNote()
  {
    if(this.noteContent &&  this.noteTitle)
    {
      const NewNote  : Note = {
        id: Date.now(),
        title : this.noteTitle,
        content : this.noteContent
      }
      this.notes.push(NewNote);
    }
  }

  deleteNote( noteId: number)
  {
      this.notes = this.notes.filter( allNote => allNote.id != noteId );
  }

}
