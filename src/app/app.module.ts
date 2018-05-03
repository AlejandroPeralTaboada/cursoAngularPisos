import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { ListaComponent } from "./lista/lista.component";
import { EmptyComponent } from "./empty/empty.component";
import { AppRoutingModule } from "./app-routing.module";
import { PisoListaComponent } from "./piso-lista/piso-lista.component";
import { PisoDetalleComponent } from "./piso-detalle/piso-detalle.component";
import { PisoNewComponent } from "./piso-new/piso-new.component";
import { CoreModule } from "./core/core.module";

@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    EmptyComponent,
    PisoListaComponent,
    PisoDetalleComponent,
    PisoNewComponent
  ],
  imports: [BrowserModule, AppRoutingModule, CoreModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
