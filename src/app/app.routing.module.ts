import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {ArtistAllComponent} from './artist-all/artist-all.component';
import {LogoutComponent} from './logout/logout.component';
import {MenuComponent} from './menu/menu.component';
import {HelloComponent} from './hello/hello.component';
import {AccountValidationComponent} from './account-validation/account-validation.component';
import {AllPaintingListComponent} from './all-painting-list/all-painting-list.component';
import {AuthguardService} from './authguard.service';
import {CommentComponent} from './comment/comment.component';
import {SearchComponent} from './search/search.component';



const routes: Routes = [
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: '', component: AllPaintingListComponent, canActivate: [AuthguardService]},
  {path: 'artist', component: ArtistAllComponent},
  {path: 'logout', component: LogoutComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'validate', component: AccountValidationComponent },
  {path: 'comment/:paintingId', component: CommentComponent },
  {path: 'search/:text', component: SearchComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
