// routes
import Routes from '../../routes';
// _data
import { _tours, _jobs, _courses } from '../../../_data/mock';

// ----------------------------------------------------------------------

export const PageLinks = [
  {
    order: '5',
    subheader: 'Common',
    items: [
      { title: '404 Error', path: Routes.page404 },
      { title: '500 Error', path: Routes.page500 },
    ],
  },
];

export const navConfig = [
  { title: 'О компании', path: 'https://shauroom.com/' },
  { title: 'Карьера', path: 'http://work.shauroom.com/' },
  {
    title: 'Стать тайным агентом',
    path: 'https://shaucontrol.ru/',
    // children: [PageLinks[0], PageLinks[4], PageLinks[1], PageLinks[3], PageLinks[2], PageLinks[5]],
  },
  { title: 'Финансовые показатели', path: 'https://docs.google.com/spreadsheets/d/1Ye1sT_OlXWy2A13AqOmQU77AGF2C-RuBlV5vGE7goWU/edit#gid=1695211277' },
];
