import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent {
  @Input() bannerId: string = '';
  //bannerUrl = 'https://academy.mxm.com.br/modulos/images/banner_' + this.bannerId + '.png';
  bannerUrl = 'https://academy.mxm.com.br/modulos/images/banner_crm_de_cobranca.png';
}
