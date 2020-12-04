import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { MsalGuard } from './msal';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [
      MsalGuard
    ]
  },
  {
    // Needed for hash routing
    path: 'code',
    component: HomeComponent
  },
  {
      path: 'logout',
      component: LogoutComponent
  },
  {
    path: '',
    component: HomeComponent
  }
];

const isIframe = window !== window.parent && !window.opener;

@NgModule({
  imports: [RouterModule.forRoot(routes, {
      useHash: false,
      // Don't perform initial navigation in iframes
      initialNavigation: !isIframe ? 'enabled' : 'disabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }