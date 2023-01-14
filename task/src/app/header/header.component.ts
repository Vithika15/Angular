import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
@Input() isDeviceXs:boolean | undefined;

  constructor() { }

  ngOnInit(): void {
    console.log("size2",this.isDeviceXs)
  }


}
