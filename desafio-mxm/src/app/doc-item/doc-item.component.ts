import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-doc-item',
  templateUrl: './doc-item.component.html',
  styleUrl: './doc-item.component.css'
})
export class DocItemComponent implements OnInit{
  @Input() docItem: string = '';
  itemId:string = '';

  @Input() docItemPadding: string = '';
  paddingStyle: string = "";

  @Input() docName: string = '';

  ariaControlsId:string = '';
  ariaLabelledById:string = '';

  urlSafe: SafeResourceUrl = '';
  

  constructor(public sanitizer: DomSanitizer) {}
  ngOnInit(): void {
    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl("https://academy.mxm.com.br/docs/" + this.docItem + ".html");

    this.paddingStyle = "padding:" + this.docItemPadding + "% 0 0 0;position:relative";

    this.ariaControlsId = "corpo" + this.docItem;
    this.ariaLabelledById = "titulo" + this.docItem;
  }
}
