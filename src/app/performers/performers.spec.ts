import { Performers } from './performers';
describe('Performers', () => {
  it('should render the Performers title', () => {
    const page = new Performers();
    expect(page).toBeTruthy();
  });
});
