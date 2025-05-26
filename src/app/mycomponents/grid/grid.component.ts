import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { jqxGridComponent } from 'jqwidgets-ng/jqxgrid';
import { Router } from '@angular/router';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class GridComponent implements OnInit {
  @ViewChild('grid', { static: false }) grid!: jqxGridComponent;

  dataAdapter: any;
  columns: any = [];
  showPopup = false;
  selectedRow: any = null;
  selectedCountry: string = '';
  countryCount: number = 0;
  private clickTimeout: any = null;
  private lastClickTime: number = 0;

  constructor(private router: Router) {}

  ngOnInit(): void {
    const source = {
      datatype: 'array',
      datafields: [
        { name: 'Id', type: 'string' },
        { name: 'Name', type: 'string' },
        { name: 'place', type: 'string' },
        { name: 'Age', type: 'string' }
      ],
      localdata: [
        { Id: 1, Name: 'John Doe', place: 'USA', Age: 30 },
        { Id: 2, Name: 'Jane Smith', place: 'USA', Age: 25 },
        { Id: 2, Name: 'maxwall', place: 'USA', Age: 31 },
        { Id: 3, Name: 'Sam Johnson', place: 'LONDON', Age: 20 },
        { Id: 4, Name: 'William', place: 'China', Age: 33 },
        { Id: 4, Name: 'shan', place: 'China', Age: 27 },
        { Id: 5, Name: 'Abort', place: 'LONDON', Age: 25 },
        { Id: 6, Name: 'Smith', place: 'kolkata', Age: 21 },
        { Id: 7, Name: 'Van Der', place: 'South Africa', Age: 18 },
        { Id: 8, Name: 'Taylor', place: 'Kolkata', Age: 26 },
      ]
    };
  
    this.dataAdapter = new jqx.dataAdapter(source);
  
    this.columns = [
      { text: 'Id', datafield: 'Id', width: '33%' },
      { text: 'Name', datafield: 'Name', width: '33%' },
      { text: 'Place', datafield: 'place', width: '33%' },
      { 
        text: 'Age', 
        datafield: 'Age', 
        width: '33%',
        filtertype: 'input',
        cellsformat: 'd',
        filtercondition: 'contains'
      }
    ];
  }

  onRowClick(event: any): void {
    const currentTime = new Date().getTime();
    console.log("currentTime",currentTime);
    
    const timeDiff = currentTime - this.lastClickTime;
    console.log("timediff",timeDiff);
    
    this.lastClickTime = currentTime;

    // If it's a double click (time between clicks is less than 300ms)
    if (timeDiff < 300) {
      this.onRowDoubleClick(event);
      return;
    }
    console.log("clicktimeout",this.clickTimeout);
    
    // Clear any existing timeout
    if (this.clickTimeout) {
      clearTimeout(this.clickTimeout); //null
    }

    // Set a new timeout
    this.clickTimeout = setTimeout(() => {
      const rowData = this.grid.getrowdata(event.args.rowindex);
      console.log('Single Click - Row Data:', rowData);
      this.selectedRow = rowData;
      this.showPopup = true;
      
      // Update country count when row is selected
      // this.selectedCountry = rowData.place;
      // this.countryCount = this.dataAdapter.records.filter(
      //   (item: any) => item.place === this.selectedCountry
      // ).length;
      // console.log(`Count of ${this.selectedCountry}:`, this.countryCount);
      this.selectedCountry = rowData.place
      this.countryCount = this.dataAdapter.records.filter((item:any)=>item.place===this.selectedCountry).length
    }, 300);
  }

  onRowDoubleClick(event: any): void {
    if (this.clickTimeout) {
      clearTimeout(this.clickTimeout);
    }

    const rowData = this.grid.getrowdata(event.args.rowindex);
    console.log('Double Click - Row Data:', rowData);
    
    // Navigate to detail page with ID in URL

    // this.router.navigate(["/row-details",rowData.Id]){}
     /* this.router.navigate([`/row-details/${rowData.Id}`],      
        {
          queryParams : {
          name: rowData.Name,
          place: rowData.place,
          age: rowData.Age
        }
      }
    ); */
    this.router.navigateByUrl(`/row-details/${rowData.Id}`, {
      state: {
        name: rowData.Name,
        place: rowData.place,
        age: rowData.Age
      }
    })
// console.log('row details:', userData);

}


  closePopup(): void {
    this.showPopup = false;
    this.selectedRow = null;
  }
}
