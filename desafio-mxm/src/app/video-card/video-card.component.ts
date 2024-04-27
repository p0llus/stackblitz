import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-video-card',
  templateUrl: './video-card.component.html',
  styleUrl: './video-card.component.css'
})
export class VideoCardComponent {
  @Input() videoId: string = '';
  @Input() videoTitle: string = '';
  //videoUrl = 'https://player.vimeo.com/video/' + this.videoId;
  videoUrl = 'https://player.vimeo.com/video/398151094';
}
