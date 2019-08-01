import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/components/dialog/dialog.component';

@Component({
  selector: 'app-graphics1',
  templateUrl: './graphics1.component.html',
  styles: []
})
export class Graphics1Component implements OnInit {


  public platos: any = {
    'plato-01': {
      labels: ['Pizarra de jamón ibérico'],
      data: [ 15, 17, 2, 1, 7],
      leyend: '18/10€'
    },
    'plato-02': {
      labels: ['Ruta de quesos de Castellón'],
      data: [ 18, 23, 3, 2, 9],
      leyend: '18/10€'
    },
    'plato-03': {
      labels: ['Sashimi de atún rojo con huevas de wasabi'],
      data: [ 4, 6, 0, 5, 5],
      leyend: '15€'
    },
    'plato-04': {
      labels: ['Salmorejo con sardinas marinadas '],
      data: [ 8, 10, 4, 6, 3 ],
      leyend: '14€'
    },
    'plato-05': {
      labels: ['tartar rojo de salmón y gambitas'],
      data: [ 8, 10, 4, 6, 6 ],
      leyend: '14€'
    }
  };
  public items: object[] = [
    { id: 1, name: 'Croquetas de calamar', price: 12.75, totalMonth: 33 },
    { id: 1, name: 'Raviolis de espinacas', price: 14, totalMonth: 65 },
    { id: 1, name: 'Manitas con langostinos', price: 20, totalMonth: 15 },
    { id: 1, name: 'Rodaballo con salsa thai', price: 17.50, totalMonth: 47 }
  ];
  dataValues: number[][] = [];
  dataLabels: string[] = [];
  dataLeyends: string[] = [];
  datachartType: string = 'doughnut';

  constructor( public dialog: MatDialog ) { }

  ngOnInit() {
    this.onLoadFive();
  }

  onLoadFive() {
    Object.values( this.platos )
      .map(
        (plato: any) => {
          console.log(plato);
          this.dataLabels.push( plato.labels[0] );
          this.dataLeyends.push( plato.leyend );
          this.dataValues.push( plato.data );
        }
      );
  }

  openDialog( event ): void {
    console.log(event);
    const dialogRef = this.dialog.open(DialogComponent, {
      panelClass: 'custom-dialog-container',
      disableClose: true,
      data: { event }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
