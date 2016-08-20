import {Injectable} from '@angular/core';
declare var firebase;

@Injectable()
export class TodoService {

  public todos() {
    return firebase.database().ref('todos').once('value');
  }

  public updateStatus(id, status) {
    return firebase.database().ref('todos/' + id + '/status').set(status);
  }
}
