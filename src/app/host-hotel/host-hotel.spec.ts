import { HostHotel } from './host-hotel';
describe('HostHotel', () => {
  it('should create the HostHotel component', () => {
    const component = new HostHotel();
    expect(component).toBeTruthy();
  });
  it('should have hotelName and bookingUrl', () => {
    const component = new HostHotel();
    expect(component.hotelName).toContain('Cambria');
    expect(component.bookingUrl).toContain('choicehotels');
  });
});
