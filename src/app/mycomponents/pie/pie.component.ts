import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import * as data from '../../../assets/data.json';
import { ChartOptions, ChartType } from 'chart.js';
// import { Label } from 'ng2-charts';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css'],
})
export class PieComponent implements OnInit {

  // @Output() labelValueData = new EventEmitter<{ label: string, value: number }>();

  
  public pieChartLabels: string[] = [];
  public pieChartData: number[] = [];
  public pieChartType: ChartType = 'pie';
  public value: number = 0;
  public label: string = '';

  public pieChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      position: 'top',
      labels: {
        fontSize: 20,
        fontColor: '#333'
      }
    },
   
    onClick: (event, elements) => {
      if (elements && elements.length > 0) {
        const index = (elements[0] as any)._index;
        this.label = this.pieChartLabels[index] as string;
        this.value = this.pieChartData[index];
        
        let totalData = data.data
        let filtererData = totalData.filter((val: any) =>{
          if(val.place?.indexOf(this.label) > -1){
            return val
          }
        })
        console.log(filtererData)
        // this.pieChartData = filtererData
        
        // this.labelValueData.emit({ label: this.label, value: this.value });
      }
    }
  };

  public color = ['red', 'blue', 'yellow', 'green', 'pink', 'orange', 'purple', 'black'];

  public pieChartColors = [
    {
      backgroundColor: this.color,
      borderColor: 'white',
      borderWidth: 3,
    },
  ];
  

  constructor() {}

  ngOnInit(): void {
    const place = data.data.map((item) => item.place);
    this.pieChartLabels = [...new Set(place)];
    
    this.pieChartData = this.pieChartLabels.map(
      (city) => place.filter((item) => item === city).length
    );

    
    
    console.log('Initialized data:', {
      labels: this.pieChartLabels,
      data: this.pieChartData
    });
  }
}
  

