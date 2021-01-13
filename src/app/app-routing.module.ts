import { DiscordReturnComponent } from './components/discord-return/discord-return.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountActivationComponent } from './components/register/account-activation/account-activation.component';
import { LoginComponent } from '../app/components/login/login.component';
import { NewsfeedComponent } from './components/newsfeed/newsfeed.component';
import { PostComponent } from './components/post/post.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from '../app/components/register/register.component';
import { SteamReturnComponent } from './components/steam-return/steam-return.component';

const routes: Routes = [
  { path: 'profile/:id', component: ProfileComponent },
  { path: 'login', component: LoginComponent },
  { path: 'newsfeed', component: NewsfeedComponent },
  { path: 'post', component: PostComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'account-activation', component: AccountActivationComponent },
  { path: 'steam-return', component: SteamReturnComponent },
  { path: 'discord-return', component: DiscordReturnComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
