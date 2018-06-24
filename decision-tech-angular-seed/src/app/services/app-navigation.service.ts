import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap, filter } from 'rxjs/operators';
import { Observable, BehaviorSubject, Subject } from 'rxjs';

@Injectable()
export class AppNavigationService {
  public showFilterMenu: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
}
