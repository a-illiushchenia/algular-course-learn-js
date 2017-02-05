import { RestaurantsHomeWorkPage } from './app.po';

describe('restaurants-home-work App', function() {
  let page: RestaurantsHomeWorkPage;

  beforeEach(() => {
    page = new RestaurantsHomeWorkPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
