import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { GridComponent } from './mycomponents/grid/grid.component';
import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';
import { HttpClientModule } from '@angular/common/http';
import {HookComponent} from './mycomponents/hook/hook.component';

// import { jqxWindowModule } from 'jqwidgets-ng/jqxwindow';
// import {jqxDropDownListModule} from 'jqwidgets-ng/jqxdropdownlist';
// import { AppRoutingModule } from './app-routing.module';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    HookComponent
  ],
  imports: [
    BrowserModule,
    jqxGridModule,
    HttpClientModule
    // AppRoutingModule,
    // NgbModule
    // jqxWindowModule,
    // jqxDropDownListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  counter = 0
  update(){
    this.counter++
  }
}
