import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Task } from 'src/app/models/Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  text!: string;
  date!: string;
  reminder: boolean = false;

  @Output() onTaskAdd : EventEmitter<Task> = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }


  onSubmit(){
    if(!this.text){
      alert("Please enter valid text");
      return;
    }

    const newTask = {
      text : this.text,
      day : this.date,
      reminder : this.reminder
    }

    this.onTaskAdd.emit(newTask);

    this.text='';
    this.date='';
    this.reminder = false;
  }

}
