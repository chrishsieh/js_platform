import { FamilyDashboardService } from './family.dashboard.service';
import { PersonDashboardService } from './person.dashboard.service';
import { UsersService } from './users.service';

export const servicesForUser = [
  UsersService,
  PersonDashboardService,
  FamilyDashboardService,
];
