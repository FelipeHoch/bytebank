import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { Routes } from '@angular/router';
import { ExtratoComponent } from "./app/extrato/extrato.component";
import { NovaTransferenciaComponent } from "./app/nova-transferencia/nova-transferencia.component";

export const routes: Routes = [
  { path: '', component: ExtratoComponent },
  { path: 'extrato', component: ExtratoComponent },
  { path: 'nova-transferencia', component: NovaTransferenciaComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
export class AppRoutingModule {}
