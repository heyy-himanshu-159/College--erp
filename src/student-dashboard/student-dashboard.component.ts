import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.services';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-student-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student-dashboard.html',
  styleUrl: './student-dashboard.css'
})

export class StudentDashboard implements OnInit {

  marks:any = []

  constructor(private api: ApiService) {}

  ngOnInit(){

    this.api.getMarks("BCA001").subscribe((data:any)=>{
      this.marks = data
    })

  }

}
