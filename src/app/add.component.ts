import { Component, OnInit } from '@angular/core';
import { MobileService } from './services/mobile.service';
import { Mobile } from './entities/mobile.entity';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './add.component.html'
})
export class AddComponent implements OnInit {
  formAdd: FormGroup;
  constructor(
    private mobileService: MobileService,
    private formBuider: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.formAdd = this.formBuider.group({
      name: '',
      price: 0,
      status: 1,
      description: ''
    });
  }
  save() {
    let mobile: Mobile = this.formAdd.value;
    this.mobileService.create(mobile).then(
      res => { },
      err => {
        console.log(err);
      }
    );
    this.router.navigate(['/index']);
  }
}
