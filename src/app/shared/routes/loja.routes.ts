import { Routes } from "@angular/router";

export const LOJA_ROUTES: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("../../pages/loja/inicio/inicio-loja.module").then(
        (m) => m.InicioLojaModule
      ),
  },
];
