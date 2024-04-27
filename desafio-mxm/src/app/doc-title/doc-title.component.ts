import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-doc-title',
  templateUrl: './doc-title.component.html',
  styleUrl: './doc-title.component.css'
})
export class DocTitleComponent {
  @Input() docTitle: string = '';
}
