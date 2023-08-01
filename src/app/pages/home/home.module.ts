import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { PoFieldModule, PoPageModule } from '@po-ui/ng-components';
import { FilterModule } from 'src/app/components/filter/filter.module';
import { TableModule } from 'src/app/components/table/table.module';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    PoPageModule,
    FilterModule,
    PoFieldModule,
    TableModule
  ], exports:[HomeComponent]
})
export class HomeModule { }
