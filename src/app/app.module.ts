import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { GameComponent } from '@containers/game/game.component';
import { LoaderComponent } from './components/loader/loader.component';
import { MainScreenComponent } from '@containers/main/main.component';
import { SettingsComponent } from '@containers/settings/settings.component';
import { SetupComponent } from '@containers/setup/setup.component';
import { RadioGroupComponent } from '@components/radio-group/radio-group.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    LoaderComponent,
    MainScreenComponent,
    RadioGroupComponent,
    SettingsComponent,
    SetupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {
        path: 'game',
        children: [
          {
            path: 'play',
            component: GameComponent,
          },
          {
            path: 'setup',
            component: SetupComponent
          }
        ]
      },
      {
        path: 'settings',
        component: SettingsComponent
      },
      {
        path: '',
        component: MainScreenComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ],
  entryComponents: [
    MainScreenComponent,
    GameComponent,
    RadioGroupComponent,
    SettingsComponent,
    SetupComponent,
  ]
})
export class AppModule { }
