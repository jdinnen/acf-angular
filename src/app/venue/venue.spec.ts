import { Venue } from './venue';
describe('Venue', () => {
  it('should create the Venue component', () => {
    const component = new Venue();
    expect(component).toBeTruthy();
  });
  it('should have the correct address', () => {
    const component = new Venue();
    expect(component.address).toBe('10621 Pioneer Farms Dr, Austin, TX 78754');
  });
});
