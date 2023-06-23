import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { ExchangeComponent } from './exchange/exchange.component';
import { WalletComponent } from './wallet/wallet.component';
import { HelpcenterComponent } from './helpcenter/helpcenter.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {
    path:'',component:MainContentComponent
  },
  {
    path:'exchange',component:ExchangeComponent
  },

  {
    path:'wallet',component:WalletComponent
  },
  {
path:"helpcenter",component:HelpcenterComponent
  },
  {
    path:"update",component:UpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
