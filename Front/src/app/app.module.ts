import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { AdministradorLayoutComponent } from "./layouts/administrador/administrador-layout.component";
import { LojaLayoutComponent } from "./layouts/loja/loja-layout.component";
import { SharedModule } from "./shared/shared.module";

@NgModule({
  declarations: [
    AppComponent,
    LojaLayoutComponent,
    AdministradorLayoutComponent,
  ],
  imports: [BrowserModule, SharedModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
