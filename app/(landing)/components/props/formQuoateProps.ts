export type FormData = {
  servings: string;
  flavor: string;
  filling: string;
  decoration: string;
  date: string;
  message: string;
};

export type FormQuoteProps = {
  formData: FormData;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
};
