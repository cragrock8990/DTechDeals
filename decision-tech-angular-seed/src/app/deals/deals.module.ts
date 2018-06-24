import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { SiteNavComponent } from 'app/siteNav/siteNav';
import { BurgerMenuComponent } from 'app/burgerMenu/burgerMenu';
import { DealsGridFilterComponent } from './filter/deals-grid-filter.component';
import { DealsGridComponent } from './grid/deals-grid.component';
import { DealsGridFilterService } from './services/deals-grid-filter.service';
import { DealsComponent } from './component/deals.component';

@NgModule({
  declarations: [
    DealsComponent,
    DealsGridComponent,
    DealsGridFilterComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    TableModule
  ],
  exports: [DealsComponent, DealsGridComponent, DealsGridFilterComponent],
  providers: [DealsGridFilterService]
})
export class DealsModule { }
