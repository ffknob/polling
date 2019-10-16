import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PageService {

  isLoading$ = new Subject<boolean>();

  private isLoading: boolean = false;

  constructor() { }

  setIsLoading(isLoading: boolean) {
    this.isLoading = isLoading;
    this.isLoading$.next(this.isLoading);
  }
}