import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterComponent } from './filter.component';
import { PoButtonModule, PoFieldModule, PoLoadingModule } from '@po-ui/ng-components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [FilterComponent],
  imports: [
    CommonModule,
    PoFieldModule,
    PoButtonModule,
    FormsModule,
    ReactiveFormsModule,
    PoLoadingModule,
  ],
  exports: [FilterComponent],
})
export class FilterModule {}
