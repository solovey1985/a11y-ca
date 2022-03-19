import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContrastComponent } from './components/contrast/contrast.component';
import { KeyboardComponent } from './components/keyboard/keyboard.component';

const routes: Routes = [
  { path: 'keyboard', component: KeyboardComponent },
  { path: 'contrast', component: ContrastComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
