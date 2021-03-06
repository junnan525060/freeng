import {Component, OnInit, HostBinding, NgModule} from '@angular/core';
import { fadeInUp } from '../../component/common/animations';
import {TableModule} from '../../component/table/table.component';
import {CodeModule} from '../../component/code/code.component';
import {TabGroupModule} from '../../component/tab/tab.component';
import {CommonModule} from '@angular/common';
import {DropdownModule} from '../../component/dropdown/dropdown.component';
import {ShareModule} from '../../component/common/share';
import {GridModule} from '../../component/grid/grid.directive';

@Component({
  selector: 'free-main-dropdown',
  templateUrl: './main-dropdown.component.html',
  styleUrls: ['./main-dropdown.component.scss'],
  animations: [fadeInUp]
})
export class MainDropdownComponent implements OnInit {

  @HostBinding('@fadeInUpState') fadeInUpState;
  @HostBinding('style.display') display = 'block';

  menus = [];

  constructor() { }

  ngOnInit() {
    this.menus = [{
      'name': 'TGCode',
      'icon': 'user'
    }, {
      'name': '邮件',
      'icon': 'envelope'
    }, {
      'name': '帮助',
      'icon': 'question-circle'
    }, {
      'name': '设置',
      'icon': 'cog'
    }, {
      'name': '登出',
      'icon': 'sign-out'
    }];
  }

}
@NgModule({
  imports: [
    CommonModule,
    TabGroupModule,
    CodeModule,
    TableModule,
    DropdownModule,
    ShareModule,
    GridModule
  ],
  declarations: [MainDropdownComponent]
})

export class MainDropdownModule {}
