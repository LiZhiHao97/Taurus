import { UserDataResolver } from './resolvers/userData.resolver';
import { HomeGuard } from './guards/home.guard';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    canActivate: [HomeGuard],
    resolve: {
      userData: UserDataResolver
    },
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'personal-center/:id',
    canActivate: [HomeGuard],
    resolve: {
      userData: UserDataResolver
    },
    loadChildren: () => import('./pages/personal-center/personal-center.module').then( m => m.PersonalCenterPageModule)
  },
  {
    path: 'topic/:tid/answer-detail/:aid',
    canActivate: [HomeGuard],
    resolve: {
      userData: UserDataResolver
    },
    loadChildren: () => import('./pages/answer-detail/answer-detail.module').then( m => m.AnswerDetailPageModule)
  },
  {
    path: 'topic-detail/:id',
    canActivate: [HomeGuard],
    resolve: {
      userData: UserDataResolver
    },
    loadChildren: () => import('./pages/topic-detail/topic-detail.module').then( m => m.TopicDetailPageModule)
  },
  {
    path: 'chat/:id',
    loadChildren: () => import('./pages/chat/chat.module').then( m => m.ChatPageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./pages/search/search.module').then( m => m.SearchPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
