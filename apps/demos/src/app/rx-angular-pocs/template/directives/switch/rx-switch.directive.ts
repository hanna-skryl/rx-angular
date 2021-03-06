import { Directive, Input } from '@angular/core';

import { Observable, ReplaySubject } from 'rxjs';
import { distinctUntilChanged, mergeAll, switchAll } from 'rxjs/operators';
import { hotFlatten } from '@rx-angular/cdk';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[rxSwitch]',
})
export class RxSwitch<U> {
  @Input()
  set rxSwitch(potentialObservable: Observable<U> | null | undefined) {
    this.observables$.next(potentialObservable);
  }

  private strategyHandler = hotFlatten<string>(undefined, mergeAll());

  @Input('rxLetStrategy')
  set strategy(strategyName: string | Observable<string> | undefined) {
    this.strategyHandler.next(strategyName);
  }

  observables$ = new ReplaySubject(1);
  viewContext = { $implicit: undefined };

  values$ = this.observables$.pipe(
    distinctUntilChanged(),
    switchAll(),
    distinctUntilChanged()
  );
}
