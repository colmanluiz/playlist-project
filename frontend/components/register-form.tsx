import * as z from "zod";

const formSchema = z.object({
  username: z.string().min(2).max(50),
});

export const RegisterForm = () => {
  return <div>teste</div>;
};
