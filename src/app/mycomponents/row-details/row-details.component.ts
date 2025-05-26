import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-row-details',
  templateUrl: './row-details.component.html',
  styleUrls: ['./row-details.component.css']
})
export class RowDetailsComponent implements OnInit {
  rowData: any = {};

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    // Get the id parameter using snapshot
    const id = this.route.snapshot.paramMap.get('id');
    console.log('Route param (id) received:', id);
    this.rowData.Id = id;

    // Get query parameters using snapshot
    // const queryParams = this.route.snapshot.queryParamMap;
    // console.log('Query params received:', queryParams);

    /* this.route.queryParamMap.subscribe((res) => {
      console.log(res)
     
      this.rowData.Name = res.get('name');
      this.rowData.place = res.get('place');
      this.rowData.Age = res.get('age'); 
    }) */
    
    let formData = this.location.getState()
    this.rowData.Name=formData['name']
    this.rowData.place=formData['place']
    this.rowData.Age=formData['age']
    




    // If no data is available, redirect back to grid
    if (!this.rowData.Id) {
      console.log('No ID found, redirecting to home');
      this.router.navigate(['/']);
    }
  }

  goBack(): void {
    this.router.navigate(['/']);
  }
}
