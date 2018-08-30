// @ts-check

interface UTCDateOffset {
  year?: number;
  month?: number;
  day?: number;
}
export interface UTCDateParams {
  startDate?: string|number|Date;

  offset?: UTCDateOffset;
}

export function utcDateSync({
  startDate,
  offset,
}: UTCDateParams = {} as UTCDateParams): Date {
  const dated = startDate == null ? new Date() : new Date(startDate);
  const { year, month, day } = offset || {} as UTCDateOffset;
  const validatedYear = year == null ? 0 : year;
  const validatedMonth = month == null ? 0 : month;
  const validatedDay = day == null ? 0 : day;

  console.log({ validatedDay, validatedMonth, validatedYear });

  if (Number.isNaN(+validatedYear)) {
    throw new TypeError(`Expected 'year' to be a valid number, but received '${year}'`);
  }

  if (Number.isNaN(+validatedMonth)) {
    throw new TypeError(`Expected 'month' to be a valid number, but received '${month}'`);
  }

  if (Number.isNaN(+validatedDay)) {
    throw new TypeError(`Expected 'day' to be a valid number, but received '${day}'`);
  }

  return new Date(Date.UTC(
    dated.getUTCFullYear() + validatedYear,
    dated.getUTCMonth() + validatedMonth,
    dated.getUTCDay() + validatedDay));
}

export async function utcDate(opts?: UTCDateParams): Promise<Date> {
  return utcDateSync(opts);
}

export default utcDate;
