import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styles: []
})
export class PromisesComponent implements OnInit {

  constructor() {

      this.countThre().then(
        ( mensaje ) => {
          console.log('Termino! ', mensaje);
        }
      )
      .catch( err => console.log( 'Error en la promesa', err ) );

  }

  ngOnInit() {
  }

  countThre(): Promise<string> {
    return new Promise<string>( (resolve, reject ) => {
      let contador = 0;
      const intervalo = setInterval( () => {
        contador++;
        console.log( contador );
        if ( contador === 3) {
          resolve('Limite del contador alcanzado!');
          // reject('Error el contador llego a 3');
          clearInterval( intervalo );
        }
      }, 1000);
    });
  }
}
