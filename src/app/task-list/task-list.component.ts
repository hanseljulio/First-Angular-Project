import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit{
  
  constructor(private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    var date: Date = new Date(this.route.snapshot.params['date']);
    console.log(date);
  }

  tasks: Task[] = [
    new Task("Visit Ann"),
    new Task("Call Dad"),
    new Task("Go to the gym"),
    new Task("Wash the dishes"),
    new Task("Shop for the party")
  ]

  add(newTask: string) {
    this.tasks.push(new Task(newTask));
    alert("Added newTask: " + newTask);
  }

  remove(existingTask: Task) {
    var userConfirmed = confirm("Are you sure you want to remove " + existingTask.title + "?");
    if (userConfirmed) {
      // Remove array - keep the ones that are not the target
      this.tasks = this.tasks.filter(task => task != existingTask);
    }
    
  }

  
}

class Task {
  constructor(public title: string) {

  }

  toggleIsDone() {
    // alert("The task " + task.title + " is done");
    this.isDone = !this.isDone;
  }

  public isDone = false;
}

