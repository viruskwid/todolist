import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from '../todo.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  SERVER_URL = 'http://localhost:3000/todos'
  constructor(private http:HttpClient) { }

  addAPI(todo:Todo){
    return this.http.post(`${this.SERVER_URL}`,todo)
  }
  getDataAPI(){
    return this.http.get(`${this.SERVER_URL}`)
  }
  deleteAPI(id:any){
    return this.http.delete(`${this.SERVER_URL}/${id}`)
  }
}
