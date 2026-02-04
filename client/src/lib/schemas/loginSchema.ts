import { z } from "zod";
import { requiredString } from "../util/util";

export const loginSchema = z.object({
    email: z.email({
        error: (issue) =>
            issue.input == null || issue.input === ''
                ? 'email is required'
                : 'Invalid email',
    }),
    password: requiredString('Password')
});

export type LoginSchema = z.infer<typeof loginSchema>;