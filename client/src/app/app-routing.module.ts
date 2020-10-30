import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NewComponent } from './components/new/new.component';
import { ArchivedComponent } from './components/archived/archived.component';


const routes: Routes = [
  {
    path: 'news',
    component: NewComponent
  },
  {
    path: 'archived',
    component: ArchivedComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
