import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

interface ISettings {
  themeUrl: string;
  theme: string;
}
@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  settings: ISettings = {
    themeUrl: 'assets/css/colors/default-dark.css',
    theme: 'default-dark'
  };
  constructor( @Inject(DOCUMENT) private document ) {
    this.loadSettings();
  }

  setSettings( {themeUrl , theme }: ISettings): void {
    localStorage.setItem( 'settings', JSON.stringify( { themeUrl , theme } ) );
  }
  getSettings(): ISettings {
    return JSON.parse( localStorage.getItem( 'settings' ) ) || this.settings;
  }
  updateSettings(settings: ISettings) {
    localStorage.setItem( 'settings', JSON.stringify( settings ) );
  }
  loadSettings(): void {
    this.settings = this.getSettings() || this.settings;
    this.document.getElementById( 'theme' ).setAttribute( 'href', this.settings.themeUrl );
  }
}
