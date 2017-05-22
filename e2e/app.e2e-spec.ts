import { TourismusAppPage } from './app.po';

describe('tourismus-app App', () => {
  let page: TourismusAppPage;

  beforeEach(() => {
    page = new TourismusAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Tour works!');
  });
});
