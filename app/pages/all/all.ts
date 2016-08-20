import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {TodoService} from '../../service/todo.service';

@Component({
  templateUrl: 'build/pages/all/all.html',
  providers: [TodoService]
})
export class AllPage {
  private tasks = {}

  constructor(private nav: NavController, private todoService: TodoService) {
    let promise = todoService.todos();

    promise.then(snapshot => {
      this.tasks = snapshot.val();
    })
  }

  changed(id, checked) {
    console.log(id + " changed " + checked);

    let status;
    if (checked) {
      status = "doing";
    } else {
      status = "untouched";
    }

    this.todoService.updateStatus(id, status);
  }

  getKeys() {
    return Object.keys(this.tasks);
  }
}
