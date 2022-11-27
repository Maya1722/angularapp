import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent implements OnInit {

  title : string = "Top 3 student";
  students: Student [] = [
    { Name: 'punam', Degree: 'Msc', Univercity: 'Aurangabad', Year: '2023' },
    { Name: 'Dipali', Degree: 'PHD', Univercity: 'pune', Year: '2018' },
    { Name: 'swati', Degree: 'BA', Univercity: 'Amravati', Year: '2022' }
    
  ]

  constructor() { }

  ngOnInit() {
  }

}
