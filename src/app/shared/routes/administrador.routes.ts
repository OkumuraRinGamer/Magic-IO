import { Routes } from "@angular/router";

export const ADMINISTRADOR_ROUTES: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("../../pages/administrador/inicio/inicio-adm.module").then(
        (m) => m.InicioAdmModule
      ),
  },
  {
    path: "camisasMasculinas",
    loadChildren: () =>
      import(
        "../../pages/administrador/camisa/masculina/camisas-masculinas-adm.module"
      ).then((m) => m.CamisasMasculinasAdmModule),
  },
  {
    path: "camisasFemininas",
    loadChildren: () =>
      import(
        "../../pages/administrador/camisa/feminina/camisas-femininas-adm.module"
      ).then((m) => m.CamisasFemininasAdmModule),
  },
];
