import { Component, OnInit } from '@angular/core';
import { MobileService } from './services/mobile.service';
import { Mobile } from './entities/mobile.entity';

@Component({
  selector: 'app-root',
  templateUrl: './index.component.html'
})
export class IndexComponent implements OnInit {
  mobiles: Mobile[];

  constructor(private mobileService: MobileService) {}

  ngOnInit() {
    this.mobileService.findAll().then(
      res => {
        this.mobiles = res;
      },
      err => {
        console.log(err);
      }
    );
  }
  delete(id: number) {
    this.mobileService.delete(id).then(
      res => {
        this.mobileService.findAll().then(
          res => {
            this.mobiles = res;
          },
          err => {
            console.log(err);
          }
        );
      },
      err => {
        console.log(err);
      }
    );
  }
}
