import { Component, OnInit, Input } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'app-dona-graph',
  templateUrl: './dona-graph.component.html',
  styles: []
})
export class DonaGraphComponent implements OnInit {

  @Input('data') doughnutChartData: MultiDataSet = [];
  @Input('labels') doughnutChartLabels: Label[] = [];
  @Input('chartType') doughnutChartType: ChartType = 'doughnut';

  constructor() { }

  ngOnInit() {
  }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }
}
