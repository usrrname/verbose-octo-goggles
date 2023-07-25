import { Component, HostBinding } from '@angular/core';
import FASTTreeItem from '../components/tree-item';
import FASTTreeView from '../components/tree-view';

FASTTreeItem;
FASTTreeView;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @HostBinding('class.App') get setDefaultClass() {
    return true;
  }

  title = 'angular-fast-15';
}
