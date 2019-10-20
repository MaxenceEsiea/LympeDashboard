import {Component, Input, OnDestroy} from '@angular/core';
import { NbThemeService } from '@nebular/theme';

@Component({
  selector: 'app-card-game-info',
  styleUrls: ['./card-game-info.component.scss'],
  templateUrl: './card-game-info.component.html',
})
export class CardGameInfoComponent implements OnDestroy {

  currentTheme: string;
  themeSubscription: any;
  @Input('app') app: any;

  constructor(private themeService: NbThemeService) {
    this.themeSubscription = this.themeService.getJsTheme().subscribe(theme => {
      this.currentTheme = theme.name;
    });
  }

  ngOnDestroy() {
    this.themeSubscription.unsubscribe();
  }
}
