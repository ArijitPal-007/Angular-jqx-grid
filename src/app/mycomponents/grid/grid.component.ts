import { Component,  OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';

@Component({
  selector: 'app-grid',
  // standalone: true,
  // imports: [jqxGridModule],
  // template: `<app-grid [dataAdapter]="dataAdapter" [columns]="columns"></app-grid>`,

  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css'],
  encapsulation: ViewEncapsulation.None // 🔥 important for global styles

})
export class GridComponent implements OnInit {
  @ViewChild('grid', { static: false }) grid!: jqxGridComponent;

  dataAdapter: any;
  columns: any = [];

  ngOnInit(): void {
    const source = {
      datatype: 'array',
      datafields: [
        { name: 'Name', type: 'string' },
        { name: 'place', type: 'string' },
        { name: 'Age', type: 'string' }
      ],
      localdata: [
        { Name: 'John Doe', place: 'USA', Age: 30 },
        { Name: 'Jane Smith', place: 'UK', Age: 25 },
        { Name: 'Sam Johnson', place: 'LONDON', Age: 20 },
        { Name: 'William', place: 'China', Age: 33 },
        { Name: 'Abort', place: 'LONDON', Age: 25 },
        { Name: 'Smith', place: 'Australia', Age: 21 },
        { Name: 'Van Der', place: 'South Africa', Age: 18 },
        { Name: 'Taylor', place: 'Kolkata', Age: 26 },
      ]
    };
  
    this.dataAdapter = new jqx.dataAdapter(source);
  
    this.columns = [
      { text: 'Name', datafield: 'Name', width: '33%' },
      { text: 'Place', datafield: 'place', width: '33%' },
      { 
        text: 'Age', 
        datafield: 'Age', 
        width: '33%',
        filtertype: 'input', // use input box instead of number filter
        cellsformat: 'd',    // keep number format
        filtercondition: 'contains' // 🔥 this is key
      }
    ];
  }
  
}
