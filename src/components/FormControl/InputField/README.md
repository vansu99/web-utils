# Input field component

## Prerequisites

- Install tailwindCSS
- Install React-hook-form (latest version)
- Install @hookform/resolvers (latest version)
- Install Yub (latest version)

## How to use?

```ts
import { InputField } from '@/components/FormControl';

const {
  control,
  handleSubmit,
  formState: { isSubmitting },
} = useForm<LoginFormValues>({
  defaultValues: { email: '', password: '' },
  resolver: yupResolver(schema),
});

<div className='form__field'>
  <label className='mb-2 block text-2xl font-medium text-black' htmlFor='email'>
    Email
  </label>
  <InputField name='email' control={control} />
</div>;
```

## Input field attributes

| Name    | Default | Type   | Accepted Values |
| ------- | ------- | ------ | --------------- |
| type    | text    | String | text/password   |
| name    | -       | String | -               |
| control |         |        |                 |

## Thank and enjoy
