import {Routes} from '@angular/router';
import {PowerupsComponent} from './powerups.component';

export const PowerupsRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: PowerupsComponent,
      },
    ],
  },
];
