// @ts-check

/** Import other modules */
import {
  utcDate,
  utcDateSync,
} from '../';

describe('utc-date', () => {
  test('offset is null', async () => {
    try {
      const d = await utcDate({ offset: null });
      const today = new Date();
      const todayFY = today.getUTCFullYear();
      const todayM = today.getUTCMonth();
      const todayD = today.getUTCDate();

      expect(d instanceof Date).toBe(true);
      expect(d).toEqual(new Date(Date.UTC(todayFY, todayM, todayD)));
    } catch (e) {
      throw e;
    }
  });

  test('startDate is null', async () => {
    try {
      const d = await utcDate({ startDate: null });
      const today = new Date();
      const todayFY = today.getUTCFullYear();
      const todayM = today.getUTCMonth();
      const todayD = today.getUTCDate();

      expect(d instanceof Date).toBe(true);
      expect(d).toEqual(new Date(Date.UTC(todayFY, todayM, todayD)));
    } catch (e) {
      throw e;
    }
  });

  test('^Param date has an invalid date value', async () => {
    try {
      await utcDate({ startDate: 'invalid-date' });
    } catch (e) {
      expect(e instanceof Error).toBe(true);
      expect(e.message).toEqual('Param opts[startDate] is not a valid date');
    }
  });

  test('^Param offset[year] is not a number', async () => {
    try {
      await utcDate({
        offset: { year: NaN },
      });
    } catch (e) {
      expect(e instanceof Error).toBe(true);
      expect(e.message).toEqual('Param opts[offset][year] is not a number');
    }
  });

  test('^Param offset[month] is not a number', async () => {
    try {
      await utcDate({
        offset: { month: NaN },
      });
    } catch (e) {
      expect(e instanceof Error).toBe(true);
      expect(e.message).toEqual('Param opts[offset][month] is not a number');
    }
  });

  test('^Param offset[date] is not a number', async () => {
    try {
      await utcDate({
        offset: { day: NaN },
      });
    } catch (e) {
      expect(e instanceof Error).toBe(true);
      expect(e.message).toEqual('Param opts[offset][date] is not a number');
    }
  });

  test('utcDate works w/ defined startDate', async () => {
    try {
      const d = await utcDate({
        startDate: '2020-02-02',
      });

      expect(d instanceof Date).toBe(true);
      expect(d).toEqual(new Date('2020-02-02T00:00:00.000Z'));
    } catch (e) {
      throw e;
    }
  });

  test('utcDate works w/ defined startDate + offsets', async () => {
    try {
      const d = await utcDate({
        startDate: '2020-02-02',
        offset: {
          year: 1,
          month: 2,
          day: 3,
        },
      });

      expect(d instanceof Date).toBe(true);
      expect(d).toEqual(new Date('2021-04-05T00:00:00.000Z'));
    } catch (e) {
      throw e;
    }
  });

  test('utcDate works w/ defined startDate + any offset', async () => {
    try {
      const d = await utcDate({
        startDate: '2020-02-02',
        offset: {
          day: -1,
        },
      });

      expect(d instanceof Date).toBe(true);
      expect(d).toEqual(new Date('2020-02-01T00:00:00.000Z'));
    } catch (e) {
      throw e;
    }
  });

  test('utcDate works w/o any params', async () => {
    try {
      const d = await utcDate();
      const today = new Date();
      const todayFY = today.getUTCFullYear();
      const todayM = today.getUTCMonth();
      const todayD = today.getUTCDate();

      expect(d instanceof Date).toBe(true);
      expect(d).toEqual(new Date(Date.UTC(todayFY, todayM, todayD)));
    } catch (e) {
      throw e;
    }
  });

  test('utcDateSync works w/o any params', () => {
    const d = utcDateSync();
    const today = new Date();
    const todayFY = today.getUTCFullYear();
    const todayM = today.getUTCMonth();
    const todayD = today.getUTCDate();

    expect(d instanceof Date).toBe(true);
    expect(d).toEqual(new Date(Date.UTC(todayFY, todayM, todayD)));
  });

});
