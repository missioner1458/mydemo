import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { AuthGuard } from './auth-guard';
import { DeActivateGuard } from './de-activate-guard';
import { TodoResolve } from './todo-resolve';

const routes: Routes = [
  { path: '', redirectTo: "/dashboard", pathMatch: 'full' },
  { path: 'dashboard', component: TodoComponent, },
  {
    path: 'page1/:number',//loadChildren: ()=>import('./todo/todo.module').then(m=>m.TodoModule),
    component: Page1Component,
    resolve: { todo: TodoResolve }
  },
  {
    path: 'page2',
    canActivate: [AuthGuard],
    canDeactivate: [DeActivateGuard],
    component: Page2Component
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing: true,
    preloadingStrategy: PreloadAllModules,
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
