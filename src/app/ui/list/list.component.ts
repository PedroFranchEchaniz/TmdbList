import { Component, OnInit } from '@angular/core';
import { ListResponse, Result } from '../../models/list-interface';
import { AccountServiceService } from '../../services/account-service.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit {

  userList: Result[] = [];
  name = '';
  description = '';
  constructor(private accountService: AccountServiceService) { }

  ngOnInit(): void {
    this.accountService.getUserList().subscribe(resp => {
      this.userList = resp.results;
    })
  }

  createList() {
    this.name = '';
    this.description = '';
    this.accountService.createList(this.name, this.description)
      .subscribe(
        (resp) => {
          window.location.href = 'http://localhost:4200/';
        }
      )
  }

}
