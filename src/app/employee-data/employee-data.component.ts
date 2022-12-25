import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-employee-data',
  templateUrl: './employee-data.component.html',
  styleUrls: ['./employee-data.component.css']
})
export class EmployeeDataComponent implements OnInit {



  UsersArray:any=[{ Id:1, Name:'maya', company:'Wipro', gender:'Female' ,salary:60000},
            { Id:2, Name:'Anil', company:'TCS', gender:'male' ,salary:40000},
           { Id:3, Name:'Sachin', company:'Infosys', gender:'male' ,salary:50000},
           { Id:4, Name:'Vinay', company:'Wipro', gender:'male' ,salary:50000},
           { Id:5, Name:'punam', company:'HCL', gender:'Female' ,salary:30000},
           { Id:6, Name:'smiral', company:'Mahindra', gender:'Female' ,salary:45000},
    

  ]
  constructor() { }

  ngOnInit() {
    
    
  }

}
