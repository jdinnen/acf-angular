import { AnimalsPage } from './animals';
describe('AnimalsPage', () => {
  it('should render the Animals title', () => {
    const page = new AnimalsPage();
    expect(page).toBeTruthy();
  });
});
