import { format, formatDistanceToNow, type DateArg } from "date-fns";
import z from "zod";

export function formatDate(date:DateArg<Date>){
    return format(date,'dd MMM yyyy h:mm a')
}
export const requiredNumber = (fieldName: string)=>
  z.coerce.number<number>({
     error: () => `${fieldName} is required`,
  })

export const requiredString = (fieldName: string) =>
  z.string<string>({
    error: (issue) => issue.input === undefined
      ? `${fieldName} is required`
      : "Not a string"
  });

  export function timeAgo(date:DateArg<Date>){
    return formatDistanceToNow(date) + ' ago'
  }