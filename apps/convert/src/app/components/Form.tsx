'use client'

import { Children, createElement } from 'react'
import { useForm, DeepPartial } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

export function Form<T extends Zod.Schema = Zod.Schema>({
  defaultValues,
  children,
  schema,
  onSubmit,
}: {
  defaultValues?: DeepPartial<z.input<T>>
  children: React.ReactElement[]
  schema: T
  onSubmit: (data: z.input<T>) => void
}) {
  const { register, handleSubmit } = useForm({
    resolver: zodResolver(schema),
    defaultValues,
  })
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {Children.map(children, (child) => {
        if (!child) return null

        return child.props.name
          ? createElement(child.type, {
              ...{
                ...child.props,
                register: register,
                key: child.props.name,
              },
            })
          : child
      })}
    </form>
  )
}
