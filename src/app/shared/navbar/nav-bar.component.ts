import { Component, Input, OnInit, EventEmitter, Output } from "@angular/core";

@Component({
  selector: 'navbar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})

export class NavBarComponent implements OnInit {

  @Input() name: string;
  @Input() opened = false;
  @Output() menuToggle: EventEmitter<boolean> = new EventEmitter()

  constructor() { }

  ngOnInit(): void { }

  toogle(): void {
    this.opened = !this.opened;
    this.menuToggle.emit(this.opened)
  }
}