import { Component, Input } from '@angular/core';
import { Result } from '../../models/list-interface';

@Component({
  selector: 'app-list-detail',
  templateUrl: './list-detail.component.html',
  styleUrl: './list-detail.component.css'
})
export class ListDetailComponent {

  @Input() list!: Result;
}
