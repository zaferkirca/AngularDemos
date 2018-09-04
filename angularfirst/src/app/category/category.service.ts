import { Injectable, Inject } from '@angular/core';
import { Category } from "./category";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/do";
import "rxjs/add/operator/catch";

@Injectable()
export class CategoryService {

  url: string = this.apiUrl + "/categories";

  constructor(private http: Http, @Inject("ApiUrl") private apiUrl) {

  }

  getCategories(): Observable<Category[]> {
    return this.http.get(this.url).map(response => response.json());
  }
}