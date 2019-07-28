import { Component, OnInit } from '@angular/core';

import { CommonService } from './../services/common.service';

@Component({
  selector: 'app-minerales',
  templateUrl: './minerales.component.html',
  styleUrls: ['./minerales.component.css']
})
export class MineralesComponent implements OnInit {

  constructor(private common:CommonService) { }

  ngOnInit() {
    this.common.crudVista = "Minerales";
  }

}
