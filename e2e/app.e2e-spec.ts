import { NgWhatsTheWeatherPage } from './app.po';

describe('ng-whats-the-weather App', function() {
  let page: NgWhatsTheWeatherPage;

  beforeEach(() => {
    page = new NgWhatsTheWeatherPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
