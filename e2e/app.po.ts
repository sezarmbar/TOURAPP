import { browser, element, by } from 'protractor';

export class TourismusAppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('Tour-root h1')).getText();
  }
}
