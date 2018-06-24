import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SiteNavComponent } from 'app/siteNav/siteNav';
import { BurgerMenuComponent } from 'app/burgerMenu/burgerMenu';
import { AppNavigationService } from './services/app-navigation.service';
import { DealsGridComponent } from './deals/grid/deals-grid.component';
import { DealsGridFilterComponent } from './deals/filter/deals-grid-filter.component';
import { DealsGridFilterService } from './deals/services/deals-grid-filter.service';
import { DealsModule } from './deals/deals.module';

@NgModule({
  declarations: [
    AppComponent,
    SiteNavComponent,
    BurgerMenuComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    DealsModule
  ],
  providers: [AppNavigationService],
  bootstrap: [AppComponent]
})
export class AppModule { }


