import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('../pages/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'category-group',
    loadComponent: () =>
      import('../pages/search/search.component').then((m) => m.SearchComponent),
  },
  {
    path: 'search/category/:category',
    loadComponent: () =>
      import('../pages/category/category.component').then(
        (m) => m.CategoryComponent
      ),
  },
  {
    path: 'search/group/:group',
    loadComponent: () =>
      import('../pages/group/group.component').then((m) => m.GroupComponent),
  },
];
