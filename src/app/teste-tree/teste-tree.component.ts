import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api/treenode';

@Component({
  selector: 'app-teste-tree',
  templateUrl: './teste-tree.component.html',
  styleUrls: ['./teste-tree.component.scss']
})
export class TesteTreeComponent implements OnInit {

  tableData: TreeNode[] = [];
    cols: any[] = [];
    loading: boolean = false;
    constructor() { }

    ngOnInit() {
        this.cols = [
            { field: 'firstname', header: 'First Name' },
            { field: 'lastname', header: 'Last Name' },

            { field: 'age', header: 'Age' },
        ];
        this.loading = true;

    }

    onNodeExpand($event: any) {
      let children = [{children: [
        {
            data: {
                firstname: 'Luiz',
                lastname: 'caldas',

                age: '16',
            },
            children: [
                {
                    data: {
                        firstname: 'Paulo',
                        lastname: 'faria',

                        age: '12',
                    },
                },
                {
                    data: {
                        firstname: 'Maria',
                        lastname: 'tst',

                        age: '12',
                    },
                },
            ],
        },
        {
            data: {
                firstname: 'Mariana',
                lastname: 'Mar',

                age: '14',
            },
        },
    ]}];

      const node = $event.node;
      //node.push(children);
      //var oNew = { firstname: 'Luiz', lastname: 'lpc', age: '34'};


      console.log('node', node);

      console.log($event['node']['children'])

      node.children = $event['node']['children'];
      node.children.push({
        data: {
            firstname: 'Mariana',
            lastname: 'Mar',

            age: '14',
        },
    })
      console.log('node.children', node.children);
      //populate
      //node.children.push(oNew);

      //refresh the data
      //console.log($event);
        //this.tableData = [...this.tableData];

       // $event['node']['children'] = oNew;
        //this.tableData = [...this.tableData];

        //console.log($event['node']['children'])
      }



    loadNodes($event: any) {
        this.loading = true;
        console.log($event);
        setTimeout(() => {
            this.tableData = [
                {
                    data: {
                        firstname: 'David',
                        lastname: 'ace',
                        age: '40',
                    },
                    children: [
                        {
                            data: {
                                firstname: 'Nathan',
                                lastname: 'ace',

                                age: '16',
                            },
                            children: [
                                {
                                    data: {
                                        firstname: 'Abe',
                                        lastname: 'ace',

                                        age: '12',
                                    },
                                },
                                {
                                    data: {
                                        firstname: 'Ksi',
                                        lastname: 'ace',

                                        age: '12',
                                    },
                                },
                            ],
                        },
                        {
                            data: {
                                firstname: 'Shane',
                                lastname: 'ace',

                                age: '14',
                            },
                        },
                    ],
                },
                {
                    data: {
                        firstname: 'Warner',
                        lastname: 'ace',

                        age: '55',
                    },
                    children: [
                        {
                            data: {
                                lastname: 'ace',
                                firstname: 'Michelle',
                                age: '20',
                            },
                        },
                        {
                            data: {
                                firstname: 'Charlie',
                                lastname: 'ace',

                                age: '24',
                            },
                        },
                    ],
                },
                {
                    data: {
                        firstname: 'Max',
                        lastname: 'ace',

                        age: '55',
                    },
                    children: [
                        {
                            data: {
                                firstname: 'Michelle',
                                lastname: 'ace',

                                age: '20',
                            },
                        },
                        {
                            data: {
                                firstname: 'Charlie',
                                lastname: 'ace',

                                age: '24',
                            },
                        },
                    ],
                },
                {
                    data: {
                        firstname: 'Willy',
                        lastname: 'ace',

                        age: '55',
                    },
                    children: [
                        {
                            data: {
                                firstname: 'Michelle',
                                lastname: 'ace',

                                age: '20',
                            },
                        },
                        {
                            data: {
                                firstname: 'Charlie',
                                lastname: 'ace',

                                age: '24',
                            },
                        },
                    ],
                },
                {
                    data: {
                        firstname: 'Miley',
                        lastname: 'ace',

                        age: '55',
                    },
                    children: [
                        {
                            data: {
                                firstname: 'Michelle',
                                lastname: 'ace',

                                age: '20',
                            },
                        },
                        {
                            data: {
                                firstname: 'Charlie',
                                lastname: 'ace',

                                age: '24',
                            },
                        },
                    ],
                },
                {
                    data: {
                        firstname: 'Sam',
                        lastname: 'ace',

                        age: '55',
                    },
                    children: [
                        {
                            data: {
                                firstname: 'Michelle',
                                lastname: 'ace',

                                age: '20',
                            },
                        },
                        {
                            data: {
                                firstname: 'Charlie',
                                lastname: 'ace',

                                age: '24',
                            },
                        },
                    ],
                },
                {
                    data: {
                        firstname: 'James',
                        lastname: 'ace',

                        age: '55',
                    },
                    children: [
                        {
                            data: {
                                firstname: 'Michelle',
                                lastname: 'ace',

                                age: '20',
                            },
                        },
                        {
                            data: {
                                lastname: 'ace',
                                firstname: 'Charlie',

                                age: '24',
                            },
                        },
                    ],
                },
            ];
            this.loading = false;
        }, 1000);

    }






}
