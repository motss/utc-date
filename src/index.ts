// @ts-check

export declare interface UTCDateOffset {
  year?: number;
  month?: number;
  day?: number;
}
export declare interface UTCDateOpts {
  offset?: UTCDateOffset;
  startDate?: string | number | Date;
}

export function isValidDate(anyDate: any) {
  return !/^invalid date/i.test(`${new Date(anyDate)}`);
}

export function utcDateSync({
  offset,
  startDate,
}: UTCDateOpts = {} as UTCDateOpts) {
  const isNullishDate = startDate == null;

  if (!isNullishDate && !isValidDate(startDate)) {
    throw new Error('Param opts[startDate] is not a valid date');
  }

  const { year = 0, month = 0, day = 0 } = offset || {} as UTCDateOffset;

  if (year != null && Number.isNaN(+year)) {
    throw new Error('Param opts[offset][year] is not a number');
  }

  if (month != null && Number.isNaN(+month)) {
    throw new Error('Param opts[offset][month] is not a number');
  }

  if (day != null && Number.isNaN(+day)) {
    throw new Error('Param opts[offset][date] is not a number');
  }

  const newDate = isNullishDate
    ? new Date()
    : new Date(startDate as string);

  return new Date(Date.UTC(
    newDate.getUTCFullYear() + year,
    newDate.getUTCMonth() + month,
    newDate.getUTCDate() + day
  ));
}

export async function utcDate(opts?: UTCDateOpts) {
  return utcDateSync(opts);
}

export default utcDate;
