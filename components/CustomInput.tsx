import React from 'react'
import { Control, FieldPath } from 'react-hook-form'
import { z } from 'zod'

import { authFormSchema } from '@/schemas/auth-form'
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'

const formSchema = authFormSchema('sign-up')
interface CustomInput {
  control: Control<z.infer<typeof formSchema>>
  name: FieldPath<z.infer<typeof formSchema>>
  label: string
  placeholder: string
  autoComplete?: React.HTMLInputAutoCompleteAttribute
}

const CustomInput = ({
  control,
  name,
  label,
  placeholder,
  autoComplete = 'off',
}: CustomInput) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="form-item">
          <FormLabel className="form-label">{label}</FormLabel>

          <div className="flex w-full flex-col">
            <FormControl>
              <Input
                {...field}
                placeholder={placeholder}
                className="input-class"
                type={name === 'password' ? 'password' : 'text'}
                autoComplete={autoComplete}
              />
            </FormControl>
            <FormMessage className="form-message mt-2" />
          </div>
        </FormItem>
      )}
    />
  )
}

export default CustomInput
