import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Employee } from '../../models/Employee';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  public displayedColumns: string[] = [
    'username', 'firstName', 'lastName', 'title'];

  public employees: Employee[] = [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.employees = this.route.snapshot.data.employees as Employee[];
  }

}
