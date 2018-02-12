// @ts-check

export declare interface UTCDateOffset {
  year?: number;
  month?: number;
  date?: number;
}
export declare interface UTCDateOpts {
  offset?: UTCDateOffset;
  startDate?: string | number | Date;
}

export function isValidDate(anyDate: any) {
  return !/^invalid date/i.test(`${new Date(anyDate)}`);
}

export async function utcDate(opts: UTCDateOpts = {} as UTCDateOpts) {
  try {
    return await utcDateSync(opts);
  } catch (e) {
    throw e;
  }
}

export function utcDateSync({
  offset,
  startDate,
}: UTCDateOpts = {} as UTCDateOpts) {
  const isNullishDate = startDate == null;

  if (!isNullishDate && !isValidDate(startDate)) {
    throw new Error('Param date has an invalid date value');
  }

  const { year = 0, month = 0, date = 0 } = offset || {} as UTCDateOffset;

  if (year != null && Number.isNaN(+year)) {
    throw new Error('Param offset[year] is not a number');
  }

  if (month != null && Number.isNaN(+month)) {
    throw new Error('Param offset[month] is not a number');
  }

  if (date != null && Number.isNaN(+date)) {
    throw new Error('Param offset[date] is not a number');
  }

  const newDate = isNullishDate
    ? new Date()
    : new Date(startDate as string);
  const newDateFY = newDate.getUTCFullYear();
  const newDateM = newDate.getUTCMonth();
  const newDateD = newDate.getUTCDate();

  return new Date(Date.UTC(
    newDateFY + year,
    newDateM + month,
    newDateD + date
  ));
}

export default utcDate;
