import { Component, OnInit } from '@angular/core';

import { environment } from '@env/environment';
import { Router } from '@angular/router';

import { AuthenticationService } from '../core/authentication/authentication.service';
import { I18nService } from '../core/i18n.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  version: string = environment.version;

  constructor(private router: Router,
    private authenticationService: AuthenticationService,
    private i18nService: I18nService) { }

  ngOnInit() { }

  // toggleMenu() {
  //   this.menuHidden = !this.menuHidden;
  // }

  setLanguage(language: string) {
    this.i18nService.language = language;
  }

  logout() {
    this.authenticationService.logout()
      .subscribe(() => this.router.navigate(['/login'], { replaceUrl: true }));
  }

  get currentLanguage(): string {
    return this.i18nService.language;
  }

  get languages(): string[] {
    return this.i18nService.supportedLanguages;
  }
  }



