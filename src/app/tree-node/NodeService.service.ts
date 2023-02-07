import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TreeNode } from '../interface/TreeNode';


@Injectable({
  providedIn: 'root',
})
export class NodeServiceService {

  constructor(private http: HttpClient) {}

  getFilesystem() {
    return this.http.get<any>('http://localhost:3000/data');
}
}
