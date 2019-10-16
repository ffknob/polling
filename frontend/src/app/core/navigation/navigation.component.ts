import { Component, OnInit, OnDestroy } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, Subscription } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

import { PageService } from '@root/core/services/page.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit, OnDestroy {

  isLoading: boolean = false;
  isLoading$: Subscription;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver,
              private pageService: PageService) {}

  ngOnInit() {
    this.isLoading$ = this.pageService.isLoading$.subscribe(
      (isLoading) => this.isLoading = isLoading,
      (err) => { throw err; }
    );
  }

  ngOnDestroy() {
    this.isLoading$.unsubscribe();
  }
}
