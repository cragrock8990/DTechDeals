import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA, DebugElement } from '@angular/core';
import { DealsGridFilterService } from '../services/deals-grid-filter.service';
import { DealsGridFilterComponent } from './deals-grid-filter.component';
import { ANY } from '../constants/deals.constants';
import { By } from '@angular/platform-browser';

fdescribe('DealsGridFilterComponent', () => {
    let comp: DealsGridFilterComponent;
    let fixture: ComponentFixture<DealsGridFilterComponent>;

    beforeEach(() => {
        const dealsGridFilterServiceStub: any = {
            getDeals: () => ({})
        };
        TestBed.configureTestingModule({
            declarations: [ DealsGridFilterComponent ],
            schemas: [ NO_ERRORS_SCHEMA ],
            providers: [
                { provide: DealsGridFilterService, useValue: dealsGridFilterServiceStub }
            ]
        });
        fixture = TestBed.createComponent(DealsGridFilterComponent);
        comp = fixture.componentInstance;
    });

    it('can load instance', () => {
        expect(comp).toBeDefined();
    });

    it('mobileInternetDataAllowance defaults', () => {
        expect(comp.mobileInternetDataAllowance).toEqual([ANY, '500MB', '1GB', '2GB', '3GB', '4GB', '5GB']);
    });

    it('internetSpeed defaults', () => {
        expect(comp.internetSpeed).toEqual([ANY, '17MB', '52MB', '76MB']);
    });

    it('should contain four filtering objects', () => {
      const filterDivs: DebugElement[] = fixture.debugElement.queryAll(By.css('div'));
      expect(filterDivs.length).toEqual(4);
    });
});
