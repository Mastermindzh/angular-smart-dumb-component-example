import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { MapComponent } from "./map/map.component";
import { GeoCodeComponentComponent } from "./geo-code-component/geo-code-component.component";

@NgModule({
  declarations: [AppComponent, MapComponent, GeoCodeComponentComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
