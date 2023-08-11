import { Component, Input, OnInit } from '@angular/core';
import { Label, MultiDataSet, Color } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent implements OnInit{


  @Input('title') title: string = 'Titulo de gráfica';

  @Input('etiqueta') doughnutChartLabels: Label[] = [];
  @Input('data') doughnutChartData: MultiDataSet = [
    [350, 450, 100],
  ];


  ngOnInit(): void {

  }



  public colors: Color[] = [
    { backgroundColor: ['#6857E6', '#009FEE', '#F02059'] }
  ]

}
