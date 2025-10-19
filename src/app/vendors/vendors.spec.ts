import { Vendors } from './vendors';
describe('Vendors', () => {
  it('should create the Vendors component', () => {
    const component = new Vendors();
    expect(component).toBeTruthy();
  });
  it('should have food and merch vendor data', () => {
    const component = new Vendors();
    expect(component.foodVendor.title).toContain('Festival Food Vendors');
    expect(component.merchVendor.title).toContain('Celtic Merchandise Vendors');
  });
});
