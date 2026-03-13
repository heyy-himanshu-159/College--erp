import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { StudentDashboard} from '../student-dashboard/student-dashboard.component';
import { Attendance } from './attendance/attendance';
import { Marks } from './marks/marks';
import { Notes } from './notes/notes';
import { Notices } from './notices/notices';
import { Complaint } from './complaint/complaint';
import { Gatepass } from './gatepass/gatepass';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dashboard', component: StudentDashboard },
  { path: 'attendance', component: Attendance },
  { path: 'marks', component: Marks },
  { path: 'notes', component: Notes },
  { path: 'notices', component: Notices },
  { path: 'complaint', component: Complaint },
  { path: 'gatepass', component: Gatepass }
];