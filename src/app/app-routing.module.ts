import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

// import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { MembersComponent } from './members/members.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { TradComponent } from './trad/trad.component';
import { SpecialComponent } from './special/special.component';
import { DefaultComponent } from './default/default.component';


const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'header', component: HeaderComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'members', component: MembersComponent},
  {path: 'playlist', component: PlaylistComponent, children: [
    {path: '', component: DefaultComponent},
    {path: 'trad', component: TradComponent},
    {path: 'special', component: SpecialComponent},

  ]},
  {path: 'not-found', component: PageNotFoundComponent},
  {path: '**', redirectTo: '/not-found'}
];

@NgModule({
  // declarations: [
  //   // AppComponent,
  //   HeaderComponent,
  //   HomeComponent,
  //   AdminComponent,
  //   MembersComponent,
  //   PageNotFoundComponent,
  //   PlaylistComponent,
  //   TradComponent,
  //   SpecialComponent,
  //   DefaultComponent
  // ],
  imports: [
  RouterModule.forRoot(appRoutes)
  ],

  exports: [
    RouterModule

  ]

})
  export class AppRoutingModule {}
