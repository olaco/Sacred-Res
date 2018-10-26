import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Observable, Observer, Subscription } from 'rxjs';
import { interval } from 'rxjs';




@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit, OnDestroy {
 numberSubscription: Subscription;
 customSubscription: Subscription;

  constructor() { }

  ngOnInit() {
    const myNumber = interval(2000);
    this.numberSubscription = myNumber.subscribe(
      (number: number) => {
        console.log(number);
      }
    );
    // How to setup observable
    const myObservable = Observable.create((observer: Observer<string>) => {
      setTimeout(() => {
        observer.next('first package');

      }, 3000);
      setTimeout(() => {
        observer.next('second package');

      }, 4000);
      setTimeout(() => {
        observer.error('completed');

      }, 5000);
      setTimeout(() => {
        observer.next('third package');

      }, 5000);

    });
     this.customSubscription = myObservable.subscribe(
      (data: string) => { console.log(data); },
      (error: string) => { console.log(error); },
      () => { console.log('completed'); }
  );


  }

  ngOnDestroy() {
  this.customSubscription.unsubscribe();
  this.numberSubscription.unsubscribe();

  }

}
