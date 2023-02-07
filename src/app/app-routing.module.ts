import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelloworldComponent } from './helloworld/helloworld.component';
import { TesteTreeComponent } from './teste-tree/teste-tree.component';
import { TreeNodeComponent } from './tree-node/tree-node.component';

const routes: Routes = [
  { path: 'hello', component: HelloworldComponent },
  { path: 'tree', component: TreeNodeComponent },
  { path: 'tree2', component: TesteTreeComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
