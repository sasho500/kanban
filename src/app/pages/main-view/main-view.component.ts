import { Component } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  CdkDrag,
  CdkDropList,
} from '@angular/cdk/drag-drop';
import { Board } from 'src/app/models/board.model';
import { Column } from 'src/app/models/column.model';
@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss'],
})
export class MainViewComponent {
  board: Board = new Board('Test Board', [
    new Column('Ideas', [
      'Get to work',
      'Go to university',
      'Go home',
      'Fall asleep',
    ]),
    new Column('Research', ['Docker', 'Vue', 'Angular', 'Node', 'PHP']),
    new Column('Todo', [
      'DO exam',
      'Test Vue',
      'Test oc-framework',
      'Tell Spas he  is  Idiot',
      'Buy BMW',
    ]),
    new Column('Done', [
      'Get up',
      'Brush teeth',
      'Take a shower',
      'Check e-mail',
      'Walk dog',
    ]),
  ]);

  todo = ['Get to work', 'Go to university', 'Go home', 'Fall asleep'];

  research = ['Docker', 'Vue', 'Angular', 'Node', 'PHP'];

  done = ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
}
