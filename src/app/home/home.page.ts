import { Component } from '@angular/core';
import { Tarea } from '../tarea';
import { FirestoreService } from '../firestore.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  // Creamos una variable con una clase 
  // TareaEditando es un objeto vacio de tipo tarea
  tareaEditando = {} as Tarea;

  constructor(private firestoreService: FirestoreService) {}

  // La función que daremos al botón
  // En esta se debe de llamar a los datos introducido y añadirlos en la base de datos
  clickBotonInsertar(){
    this.firestoreService.insertar("tareas", this.tareaEditando);
  }

}
