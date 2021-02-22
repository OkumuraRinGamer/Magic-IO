import { Routes } from "@angular/router";

export const LOJA_ROUTES: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("../../pages/loja/inicio/inicio-loja.module").then(
        (m) => m.InicioLojaModule
      ),
  },
  {
    path: "camisasMasculinas",
    loadChildren: () =>
      import(
        "../../pages/loja/camisa/masculina/camisas-masculinas-loja.module"
      ).then((m) => m.CamisasMasculinasLojaModule),
  },
  {
    path: "camisasFemininas",
    loadChildren: () =>
      import(
        "../../pages/loja/camisa/feminina/camisas-femininas-loja.module"
      ).then((m) => m.CamisasFemininasLojaModule),
  },
];
