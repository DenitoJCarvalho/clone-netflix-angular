import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {

  @Input() title: any;
  @ViewChild('trailer', { static: true }) trailer: ElementRef<HTMLVideoElement>;

  constructor() { }

  ngOnInit(): void {
  }

  playVideo() {//informa que seja executado sempre do começo
    this.trailer.nativeElement.play(); //informa para voltar ao começo do video
  }

  stopVideo() {
    this.trailer.nativeElement.currentTime = 0;
    this.trailer.nativeElement.pause(); //informa para parar o video
  }

  getMuted(): boolean {
    return this.trailer.nativeElement.muted;
  }

  toggleSound() {
    this.trailer.nativeElement.muted = !this.trailer.nativeElement.muted;;
  }

}
