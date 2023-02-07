import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HelloworldComponent } from './helloworld/helloworld.component';
import {ButtonModule} from 'primeng/button';
import { HttpClientModule } from '@angular/common/http';
import { TreeNodeComponent } from './tree-node/tree-node.component';
import {TreeTableModule} from 'primeng/treetable';
import { TreeTableSelectionDemoComponent } from './tree-table-selection-demo/tree-table-selection-demo.component';
import { TesteTreeComponent } from './teste-tree/teste-tree.component';
import { BrowserAnimationsModule } from
    '@angular/platform-browser/animations';
    import { TreeModule } from 'primeng/tree';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { VirtualScrollerModule } from 'primeng/virtualscroller';
@NgModule({
  declarations: [
    AppComponent,
    HelloworldComponent,
    TreeNodeComponent,
    TreeTableSelectionDemoComponent,
    TesteTreeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ButtonModule,
    TreeTableModule,
    TreeModule,
    InputTextModule,
        FormsModule,
        VirtualScrollerModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
