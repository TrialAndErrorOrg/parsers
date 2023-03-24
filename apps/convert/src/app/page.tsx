'use client'
import { z } from 'zod'
import { useState } from 'react'
import { SelectFormat } from './components/SelectFormat'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Form } from './components/Form'
import { SelectFormatNative } from './components/SelectFormatNative'

function onSubmit() {}

const froms = ['docx'] as const
const tos = ['tex'] as const
//: Record<`${(typeof froms)[number]}-${(typeof tos)[number]}`, z.Schema>
const docxToTexOptions = z.object({
  citations: z.boolean().optional().default(true),
  email: z.string().email().optional(),
})

const converterOptions = {
  'docx-tex': docxToTexOptions, // .superRefine((data) => {
  //   if (data.citations && !data.email) {
  //     return {
  //       path: ['email'],
  //       message: 'Email is required when citations is true',
  //     }
  //   }
  //   return null
  // }),
} as const

const schema = z.object({
  from: z.enum(froms),
  to: z.enum(tos),
})

export default function Page() {
  const { getValues, register, formState, handleSubmit, watch } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      from: 'docx' as const,
      to: 'tex' as const,
    },
  })
  const values = getValues()

  console.log(values)

  const { from, to } = values
  const optionsSchema = converterOptions[`${from}-${to}`]

  console.log(optionsSchema, optionsSchema.shape)
  return (
    <div className="flex flex-col">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor={'from'} className="block text-sm font-medium text-gray-700">
          From
        </label>
        <select
          {...register('from')}
          className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        >
          <option value="docx">Word</option>
        </select>
        <SelectFormatNative
          name="to"
          options={[{ format: 'tex', name: 'LaTeX' }]}
          register={register}
        />

        <div>
          <label className="text-base font-medium text-gray-900">Notifications</label>
          <p className="text-sm leading-5 text-gray-500">
            How do you prefer to receive notifications?
          </p>
          <div className="space-y-4">
            {Object.entries(optionsSchema.shape).map(([key, value]) => {
              if (value._def.innerType._def.typeName === 'ZodString') {
                return (
                  <div key={key} className="flex items-center">
                    <label htmlFor={key} className="mr-3 block text-sm font-medium text-gray-700">
                      {key}
                    </label>

                    <input
                      id={key}
                      name={key}
                      type="text"
                      {...register(key)}
                      className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                  </div>
                )
              }
              return (
                <div key={key} className="flex items-center">
                  <input
                    id={key}
                    name={key}
                    type="checkbox"
                    {...register(key)}
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label htmlFor={key} className="ml-3 block text-sm font-medium text-gray-700">
                    {key}
                  </label>
                </div>
              )
            })}
            {/* {notificationMethods.map((notificationMethod) => (
                <div key={notificationMethod.id} className="flex items-center">
                  <input
                    id={notificationMethod.id}
                    name="notification-method"
                    type="radio"
                    defaultChecked={notificationMethod.id === 'email'}
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                  />
                  <label
                    htmlFor={notificationMethod.id}
                    className="ml-3 block text-sm font-medium text-gray-700"
                  >
                    {notificationMethod.title}
                  </label>
                </div>
              ))} */}
          </div>
        </div>
      </form>
    </div>
  )
}
