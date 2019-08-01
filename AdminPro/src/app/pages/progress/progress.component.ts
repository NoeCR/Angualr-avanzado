import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {

  public progressBlue: number;
  public progressGreen: number;

  constructor() { }

  ngOnInit() {
    this.progressBlue = 20;
    this.progressGreen = 30;
  }

  // updateProgress( event ) {
  //   console.log('Evento: ', event );
  // }

}
