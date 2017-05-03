import { LicenseItPage } from './app.po';

describe('license-it App', () => {
  let page: LicenseItPage;

  beforeEach(() => {
    page = new LicenseItPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
