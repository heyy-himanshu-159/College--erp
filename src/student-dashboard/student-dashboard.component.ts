import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
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
  attendance:any = []
  notices:any = []
  TeacherLocation:any = []
  placement:any = []

  constructor(private api: ApiService) {}

  ngOnInit(){

    this.api.getMarks("BCA001").subscribe((data:any)=>{
      this.marks = data
    })

    this.api.getAttendance("BCA001").subscribe((data:any)=>{
      this.attendance = data
    })

    this.api.getNotices().subscribe((data:any)=>{
    this.notices = data
    })

    this.api.getTeacherLocation().subscribe((data:any)=>{
console.log(data)
})

this.api.getPlacement().subscribe((data:any)=>{
this.placement = data
})


  }

}

