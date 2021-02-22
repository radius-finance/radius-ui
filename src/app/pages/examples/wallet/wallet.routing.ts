import { Routes } from "@angular/router";
import { WalletComponent } from "./wallet.component";

export const WalletRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: WalletComponent
      }
    ]
  },
];
