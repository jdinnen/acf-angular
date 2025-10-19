import { Animals } from './animals';
describe('AnimalsPage', () => {
  it('should render the Animals title', () => {
    const page = new Animals();
    expect(page).toBeTruthy();
  });
});
