import { Component, OnInit } from '@angular/core';
import { TreeNode } from '../interface/TreeNode';
import { NodeServiceService } from '../tree-node/NodeService.service';

@Component({
  selector: 'app-tree-table-selection-demo',
  templateUrl: './tree-table-selection-demo.component.html',
  styleUrls: ['./tree-table-selection-demo.component.scss']
})
export class TreeTableSelectionDemoComponent implements OnInit {

  files!: TreeNode[];

    selectedNode!: TreeNode;

    constructor(private carService: NodeServiceService) { }

    ngOnInit() {
        this.carService.getFilesystem().subscribe(files => this.files = files);
    }

}
