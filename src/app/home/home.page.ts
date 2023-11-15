import { Component } from '@angular/core';
import { Tarea } from '../tarea';
import { FirestoreService } from '../firestore.service';
//import { error } from 'console';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  // Creamos una variable con una clase 
  // TareaEditando es un objeto vacio de tipo tarea
  tareaEditando = {} as Tarea;

  arrayColeccionTareas: any = [
    {
      id: "",
      tarea: {} as Tarea
    }
  ];

  constructor(private firestoreService: FirestoreService) {
    this.obtenerListaTarea();
   }

  // La función que daremos al botón
  // En esta se debe de llamar a los datos introducido y añadirlos en la base de datos
  clickBotonInsertar() {
    this.firestoreService.insertar("tareas", this.tareaEditando);
    
    // this.firestoreService.insertar("tareas", this.tareaEditando).then(() => {
    //   console.log('Tarea creada correctamente!!');
    //   this.tareaEditando= {} as Tarea;
    // }, () => {
    //   //console.log(error);
    // });
    
  }

  obtenerListaTarea(){
    this.firestoreService.consultar("tareas").subscribe((datosRecibidos)=>{
      //Limpiamos el array antiguo para añadir el dato nuevo
      this.arrayColeccionTareas = [];
      // Recorremos los datos recibidos de la BD
      datosRecibidos.forEach((datosTarea)=> {
        // Cada elemento  de la BD se almacena en el array que se muestra en pantalla
        this.arrayColeccionTareas.push({
          id: datosTarea.payload.doc.id,
          tarea: datosTarea.payload.doc.data()
        })
      });
    });
  }

}
