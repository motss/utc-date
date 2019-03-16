import { utcDate } from '..';

describe('utc-date', () => {
  describe('error', () => {
    it(`throws when first argument is 'null'`, async () => {
      try {
        await utcDate(null!);
      } catch (e) {
        expect(e).toStrictEqual(
          new TypeError(`Cannot destructure property \`startDate\` of 'undefined' or 'null'.`));
      }
    });

    it(`throws when invalid 'year'`, async () => {
      try {
        await utcDate({ offset: { year: NaN } });
      } catch (e) {
        expect(e).toStrictEqual(
          new TypeError(`Expected 'year' to be a valid number, but received '${NaN}'`));
      }
    });

    it(`throws when invalid 'month'`, async () => {
      try {
        await utcDate({ offset: { month: NaN } });
      } catch (e) {
        expect(e).toStrictEqual(
          new TypeError(`Expected 'month' to be a valid number, but received '${NaN}'`));
      }
    });

    it(`throws when invalid 'day'`, async () => {
      try {
        await utcDate({ offset: { day: NaN } });
      } catch (e) {
        expect(e).toStrictEqual(
          new TypeError(`Expected 'day' to be a valid number, but received '${NaN}'`));
      }
    });

  });

  describe('ok', () => {
    it('returns UTC date with any arguments', async () => {
      const d = await utcDate();

      expect(d).toStrictEqual(new Date(new Date().toJSON().replace(/^(.+)T.+/i, '$1')));
    });

    it(`returns UTC date with defined 'startDate'`, async () => {
      const d = await utcDate({ startDate: '2018-03-03' });

      expect(d).toStrictEqual(new Date(new Date('2018-03-03').toJSON()));
    });

    it(`returns UTC date with defined 'offset'`, async () => {
      const dated = new Date();
      const exp = new Date(Date.UTC(
        dated.getUTCFullYear() + 1, dated.getUTCMonth() + 2, dated.getUTCDate()));
      const d = await utcDate({ offset: { year: 1, month: 2 } });

      expect(d).toStrictEqual(exp);
    });

    it(`returns UTC date with defined 'startDate' and 'offset'`, async () => {
      const d = await utcDate({ startDate: '2018-03-03', offset: { year: 1, month: 2 } });

      expect(d).toStrictEqual(new Date(new Date('2019-05-03').toJSON()));
    });

  });

});
