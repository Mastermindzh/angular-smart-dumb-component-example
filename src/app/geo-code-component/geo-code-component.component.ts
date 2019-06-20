import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Dot } from "../map/map.component";

@Component({
  selector: "app-geo-code-component",
  templateUrl: "./geo-code-component.component.html",
  styleUrls: ["./geo-code-component.component.scss"]
})
export class GeoCodeComponentComponent {
  @Output() onGeoCode = new EventEmitter();

  public geoCodeDot: any;

  public onGeoClick(event: any) {
    this.onGeoCode.emit(this.geoCodeDot);
    this.geoCodeDot = event;
  }
}
