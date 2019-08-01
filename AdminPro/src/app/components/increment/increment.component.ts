import { Component,
        OnInit,
        Input,
        Output,
        EventEmitter,
        ViewChild,
        ElementRef } from '@angular/core';

@Component({
  selector: 'app-increment',
  templateUrl: './increment.component.html',
  styles: []
})
export class IncrementComponent implements OnInit {

  @ViewChild('txtProgess', { static: false }) txtProgess: ElementRef;

  @Input() leyend: string;
  @Input() progress: number;

  @Output('updateValue') chValue: EventEmitter<number> = new EventEmitter();

  constructor() {}

  ngOnInit() {
    console.log(this.leyend);
    console.log(this.progress);
  }

  onKeyDown(evt) {
    this.changeValue(evt.target.value);
  }
  changeValue(value: string) {
    const operator = value.slice(0, 1);

    const val = parseInt( value.split(value.slice(0, 1))[1], 0 );
    switch (operator) {
      case '+':
        if ((this.progress + val) <= 100) {
          this.progress += val;
        }
        break;
      case '-':
        if ((this.progress - val) >= 0) {
          this.progress -= val;
        }
        break;
      case 'x':
        if ((this.progress * val) <= 100) {
          this.progress *= val;
        }
        break;
      case '/':
        if ((this.progress / val) >= 0) {
          this.progress /= val;
        }
        break;
      case '%':
        if ((this.progress % val) >= 0) {
          this.progress %= val;
        }
        break;
      default:
        console.log('Sorry but the operation cannot be performed');
    }
    this.chValue.emit( this.progress );
    this.txtProgess.nativeElement.value = this.progress;
    this.txtProgess.nativeElement.blur();
  }
}
