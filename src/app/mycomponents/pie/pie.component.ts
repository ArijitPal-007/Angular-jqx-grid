import { Component, OnInit } from '@angular/core';
import * as data from '../../../assets/data.json';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css'],
})
export class PieComponent implements OnInit {
  public pieChartLabels: string[] = [];
  public pieChartData: number[] = [];
  public pieChartType = 'pie';
  public color = [
    'red',
    'blue',
    'yellow',
    'green',
    'pink',
    'orange',
    'purple',
    'black',
  ];
  public pieChartColors = [
    {
      backgroundColor: [
        this.color.map(col=>col)

      ],
    },
  ];

  constructor() {}

  ngOnInit(): void {
    const place = data.data.map((item) => item.place);
    console.log(place);

    this.pieChartLabels = [...new Set(place)];
    // console.log(unique);

    this.pieChartData = this.pieChartLabels.map(
      (city) => place.filter((item) => item == city).length
    );


    // const color = ["red","purple","yellow","green","pink","blue","orange","black"]
    // const getColor = color.map(col=> col)
    // console.log(getColor);

    // console.log(count);

    //  const len = place.length
    //  let store = []
    //  let unique = []
    //  for(let i=0;i<len;i++){
    //   store.push(place[i])
    //   // console.log(store);
    //   for(let j=0;j<store.length;j++){

    //     if(store[j] === place[i]){
    //       unique.push([place[i]])
    //     }
    //   }

    //   console.log("unique",unique[i]);
  }
}
