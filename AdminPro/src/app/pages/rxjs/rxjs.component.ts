import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { retry, map, filter } from 'rxjs/operators';
@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {

  subscription: Subscription;

  constructor() {
    this.subscription = this.returObervable().pipe(
      retry( 2 )
    ).subscribe(
      (num: number) => console.log( 'Subs ', num ),
      (err) => console.log( 'Error: ', err ),
      () => console.log( 'El observador termino!' )
    );
  }

  ngOnInit() {
  }
  ngOnDestroy() {
    console.log('Cerrando página!');
    this.subscription.unsubscribe();
  }
  returObervable(): Observable<any> {
    return new Observable( ( observer: Subscriber<any> ) => {
      let contador = 0;
      const intervalo = setInterval( () => {
        contador++;

        const salida = {
          valor: contador
        }
        observer.next( salida );
        // if ( contador === 3 ) {
        //   observer.complete();
        //   clearInterval(intervalo);
        // }
        // if ( contador === 2 ) {
        //   clearInterval(intervalo);
        //   observer.error('Error en la ejecución del intervalo:obs');
        // }
      }, 1000);
    }).pipe(
      map( response => response.valor ),
      filter( ( valor, index ) => {
        if ( ( valor % 2 ) === 1 ) {
          return true;
        }
      })
    );
  }
}
