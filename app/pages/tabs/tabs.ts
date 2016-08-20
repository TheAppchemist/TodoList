import {Component} from '@angular/core';
import {AllPage} from '../all/all';
import {PendingPage} from '../pending/pending';
import {CompletedPage} from '../completed/completed';

@Component({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {

  private tab1Root: any;
  private tab2Root: any;
  private tab3Root: any;

  constructor() {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    this.tab1Root = AllPage;
    this.tab2Root = PendingPage;
    this.tab3Root = CompletedPage;
  }
}
