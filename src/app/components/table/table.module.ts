import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import { PoTableModule } from '@po-ui/ng-components';




@NgModule({
  declarations: [TableComponent],
  imports: [CommonModule, PoTableModule],
  exports: [TableComponent],
})
export class TableModule {}
