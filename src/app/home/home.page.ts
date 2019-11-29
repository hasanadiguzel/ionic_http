import { Component } from '@angular/core';
import { VeriService } from '../veri.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  veriler: any;
  durum: boolean = false;

  constructor(public veriService: VeriService) 
  {
    this.veriService.veriCek().subscribe(sonuc => { this.veriler = sonuc; this.durum = true;}, e => { console.log(e); this.durum = false;});
  }

}
