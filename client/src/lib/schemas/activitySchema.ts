import * as z from "zod";
import { requiredString,requiredNumber } from "../util/util";


export const activitySchema = z.object({
  title: requiredString('Title'),
  description: requiredString('Description'),
  date: z.coerce.date<Date>({
    error: (issue) =>
      issue.input == null || issue.input === ''
        ? 'Date is required'
        : 'Invalid date',
  }),
  status: requiredString('Status'),
  category: requiredString('Category'),
  location: z.strictObject(
    {
      country: requiredString('Country'),
      address: requiredString('Address'),
      latitude: requiredNumber('Latitude'),
      longitude: requiredNumber('Longitude'),
    },
    {
      error: (issue) => issue.input === undefined
        ? "Location is required"
        : "Not a string"
    }
  ),
  price:requiredNumber('Price'),
  capacity:requiredNumber('Capacity')

});

export type ActivitySchema = z.infer<typeof activitySchema>;
