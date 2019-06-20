import { Component } from "@angular/core";
import { Dot } from "./map/map.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "map-app";

  public geoCodeDot: Dot;
  public routingDots: Dot[] = [];

  public changeGeoCode(x: number, y: number) {
    this.geoCodeDot = { x, y };
  }

  public onGeoClick(event: Dot) {
    this.geoCodeDot = event;
  }

  public addDot(event: Dot) {
    this.routingDots.push(event);
  }

  public scream(event: string) {
    alert(event);
  }

  public handleGeoCodeFromComponent(event: any) {
    console.warn("EVENT FROM COMPONENT", event);
  }
}
