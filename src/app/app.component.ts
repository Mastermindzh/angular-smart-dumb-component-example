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

  public moveDots: Dot[] = [{ x: 971, y: 386 }];

  public onMoveDot(event: MouseEvent) {
    if (this.moveDots.length < 2) {
      this.moveDots.push(event);
    } else {
      this.moveDots = [];
      this.moveDots.push(event);
    }
  }
}
