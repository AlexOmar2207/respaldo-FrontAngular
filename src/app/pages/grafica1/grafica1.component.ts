import { Component, OnInit } from '@angular/core';
import { MultiDataSet, Label, Color } from 'ng2-charts';


@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styleUrls: ['./grafica1.component.css']
})
export class Grafica1Component {

  arrLabels: Label[] = []
  data1: MultiDataSet = [
    [10, 2, 15],
  ];

  get getLabels(){
    return this.arrLabels = ['Label1', 'Label2', 'Label2']
  }
  get getLabels2(){
    return this.arrLabels = ['Label1', 'Prueba2', 'Prueba3']
  }




}
