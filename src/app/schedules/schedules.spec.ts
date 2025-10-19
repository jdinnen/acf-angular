import { Schedules } from './schedules';

describe('Schedules', () => {
  it('should create the Schedules component', () => {
    const schedules = new Schedules();
    expect(schedules).toBeTruthy();
  });

  it('should have intro text', () => {
    const schedules = new Schedules();
    expect(schedules.intro.length).toBeGreaterThan(0);
  });

  it('should have two schedule days', () => {
    const schedules = new Schedules();
    expect(schedules.scheduleDays.length).toBe(2);
    expect(schedules.scheduleDays[0].day).toBe('Saturday');
    expect(schedules.scheduleDays[1].day).toBe('Sunday');
  });
});
