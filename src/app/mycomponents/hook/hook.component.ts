import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { log } from 'util';

@Component({
  selector: 'app-hook',
  templateUrl: './hook.component.html',
  styleUrls: ['./hook.component.css']
})
export class HookComponent implements OnChanges {
  @Input() counter = 0;

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    console.log('Counter changed:', changes['counter']);
    console.log('Previous value:', changes['counter'].previousValue);
    console.log('Current value:', changes['counter'].currentValue);
    const a=changes['counter'].previousValue
    const b=changes['counter'].currentValue
    console.log(a+b);
    
  }
}
