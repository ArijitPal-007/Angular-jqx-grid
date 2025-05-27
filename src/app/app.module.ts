import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { GridComponent } from './mycomponents/grid/grid.component';
import { jqxGridModule } from 'jqwidgets-ng/jqxgrid';
import { HttpClientModule } from '@angular/common/http';
import {HookComponent} from './mycomponents/hook/hook.component';
import { RowDetailsComponent } from './mycomponents/row-details/row-details.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { PieComponent } from './mycomponents/pie/pie.component';
import { ChartsModule } from 'ng2-charts';

// import { jqxWindowModule } from 'jqwidgets-ng/jqxwindow';
// import {jqxDropDownListModule} from 'jqwidgets-ng/jqxdropdownlist';
// import { AppRoutingModule } from './app-routing.module';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    HookComponent,
    RowDetailsComponent,
    PieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    jqxGridModule,
    HttpClientModule,
    RouterModule,
    ChartsModule
    // AppRoutingModule,
    // NgbModule
    // jqxWindowModule,
    // jqxDropDownListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
}
