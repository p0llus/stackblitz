import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent implements OnInit {
  @Input() bannerId: string = '';
  bannerUrl:string = '';
  ngOnInit(): void {
    this.bannerUrl = 'https://academy.mxm.com.br/modulos/images/banner_' + this.bannerId + '.png';  
  }
}
