import { HighlandGamesPage } from './highland-games';
describe('HighlandGamesPage', () => {
  it('should render the Highland Games title', () => {
    const mockDialog = { open: () => {} } as any;
    const page = new HighlandGamesPage(mockDialog);
    expect(page).toBeTruthy();
  });
});
