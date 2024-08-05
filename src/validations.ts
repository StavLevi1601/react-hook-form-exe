import z from "zod";

export const schema = z.object({
  email: z.string().email("The email is invalid").min(1, "Email is required"),
});

export type Schema = z.infer<typeof schema>;
