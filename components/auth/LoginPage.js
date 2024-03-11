'use client'
import { TextInput, Checkbox, Button, Group, Box, Fieldset } from '@mantine/core';
import { useForm } from '@mantine/form';

export default function Demo() {
const form = useForm({
  initialValues: {
    email: '',
    name:'',
    termsOfService: false,
  },

  validate: {
    email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
  },
});

return (
    <Fieldset legend="Personal information">
            <form onSubmit={form.onSubmit((values) => console.log(values))}>
      <TextInput 
      {...form.getInputProps('name')}
      label="Your name" placeholder="Your name" />
      <TextInput
          withAsterisk
          label="Email"
          placeholder="your@email.com"
          {...form.getInputProps('email')}
        />

        <Checkbox
          mt="md"
          label="I agree to sell my privacy"
          {...form.getInputProps('termsOfService', { type: 'checkbox' })}
        />

        <Group justify="flex-end" mt="md">
          <Button type="submit">Submit</Button>
        </Group>
       </form>
    </Fieldset>
  );
}