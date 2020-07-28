import { Component, OnInit } from '@angular/core';
import { MobileService } from './services/mobile.service';
import { Mobile } from './entities/mobile.entity';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './edit.component.html'
})
export class EditComponent implements OnInit {
  formEdit: FormGroup;
  constructor(
    private mobileService: MobileService,
    private formBuider: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      let id = parseInt(params.get('id'));
      this.mobileService.find(id).then(
        res => {
          let mobile: Mobile = res;
          console.log(mobile);
          this.formEdit = this.formBuider.group({
            id: mobile.id,
            name: mobile.name,
            price: mobile.price,
            status: mobile.status,
            description: mobile.description
          });
        },
        err => {
          console.log(err);
        }
      );
    });
  }
  save() {
    let mobile: Mobile = this.formEdit.value;
    this.mobileService.update(mobile).then(
      res => { },
      err => {
        console.log(err);
      }
    );
    this.router.navigate(['/index']);
  }
}
