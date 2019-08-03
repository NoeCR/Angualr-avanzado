import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { SettingsService } from '../../services/service.index';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: []
})
export class AccountSettingsComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document,
              public settings: SettingsService ) { }

  ngOnInit() {
    this.onLoad( this.settings.getSettings().theme );
  }

  changeColor( color: string, link: any ) {
    this.onCheck(link);
    const url = `assets/css/colors/${color}.css`;
    this.document.getElementById('theme').setAttribute('href', url);
    this.settings.setSettings({ themeUrl: url, theme: color});
  }

  onCheck( link: any ) {
    const selectors: any = document.getElementsByClassName('selector');
    for ( const ref of selectors ) {
      ref.classList.remove('working');
    }
    link.classList.add('working');
  }

  onLoad( className: string ): void {
    document.getElementsByClassName( className + '-theme' )[0].classList.add('working');
  }
}
