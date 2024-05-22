import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../service/api.service';
import { Todo } from '../todo.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  Alldata:any
  todo:Todo={ title: '', task: '' };
  editedTodo: any=[]
  constructor(private api:ApiService){}
  ngOnInit(): void {
    this.getData()
  }
  onSubmit() {
    this.api.addAPI(this.todo).subscribe();
    this.todo = { title: '', task: '' };
    this.getData()
    
  }
  
  getData(){
    this.api.getDataAPI().subscribe((res:any)=>{
        this.Alldata=res
    })
  }
  delete(id:any){
    this.api.deleteAPI(id).subscribe((res:any)=>{
      alert(`${id} task deleted`)
      this.getData()
    })
  }
  openEditModal(item:any) {
    this.editedTodo = item
    console.log(this.editedTodo);
    
}
edit(){

}

  }

