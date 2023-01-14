import { Component, OnInit } from '@angular/core';
import { MediaObserver,MediaChange } from '@angular/flex-layout';
import { filter, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'task';
  activeMediaQuery = '';
  isDeviceXs:boolean = false;
  mediaSubject!: Subscription;

constructor(public mediaObserver:MediaObserver ){

}

ngOnInit(): void {

    this.mediaSubject = this.mediaObserver.asObservable()
    .subscribe((change) => {

       this.isDeviceXs = change[0].mqAlias == 'xs'? true:false;

    });

    // this.mediaSubject = this.mediaObserver.asObservable()
    //   .pipe(filter((change: MediaChange[]) => change[0].mqAlias == 'xs'))
    //   .subscribe((res) => {
    //     this.isDeviceXs = true;
    //     console.log('yes',res );
    //   });


  }

  ngOnDestroy(){
       this.mediaSubject.unsubscribe();
  }

}
