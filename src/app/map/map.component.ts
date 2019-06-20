import { Component, Output, EventEmitter, Input, OnInit } from "@angular/core";

export interface Dot {
  x: number;
  y: number;
}

@Component({
  selector: "map-component",
  templateUrl: "./map.component.html",
  styleUrls: ["./map.component.scss"]
})
export class MapComponent {
  @Output() myClick = new EventEmitter();
  @Output() rightClick = new EventEmitter();

  // @Input() dots: Dot[];
  @Input() dots: Dot[];

  event: MouseEvent;

  constructor() {}

  public onClick(event: MouseEvent): void {
    this.myClick.emit({
      x: event.clientX,
      y: event.clientY
    });
  }

  public onContextMenu(event: MouseEvent) {
    event.stopPropagation();
    this.rightClick.emit({
      x: event.clientX,
      y: event.clientY,
      rightClick: true,
      event
    });

    return false;
  }
}
