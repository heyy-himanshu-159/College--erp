import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private http: HttpClient) {}

  getMarks(id:any){
    return this.http.get("http://localhost:3000/marks/" + id);
  }

  getAttendance(id:any){
    return this.http.get("http://localhost:3000/attendance/" + id);
  }

  getNotices(){
return this.http.get("http://localhost:3000/notices")
}

 getTeacherLocation(){
return this.http.get("http://localhost:3000/notices")
}

 getPlacement(){
return this.http.get("http://localhost:3000/notices")
}

}


