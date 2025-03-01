import { AfterViewInit, Component } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements AfterViewInit {

  readyLogo$: Observable<boolean>;
  readyHello$: Observable<boolean>;
  readyHomeText$: Observable<boolean>;

  readyContactez$: Observable<boolean>;
  readyDuo$: Observable<boolean>;
  readyFooter$: Observable<boolean>;

  constructor(
  ) {
  }

  ngAfterViewInit(): void {
    this.readyLogo$ = timer(200).pipe(map(() => true));
    this.readyHello$ = timer(300).pipe(map(() => true));
    this.readyHomeText$ = timer(480).pipe(map(() => true));
    this.readyContactez$ = timer(520).pipe(map(() => true));
    this.readyDuo$ = timer(530).pipe(map(() => true));

    this.readyFooter$ = timer(520).pipe(map(() => true));
  }

  mailto(): void {
    window.location.href = `mailto:info@pbm.law`;
  }

}
