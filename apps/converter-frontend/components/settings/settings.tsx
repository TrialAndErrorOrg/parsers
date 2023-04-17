import React from 'react'
import { HStack, VStack } from '../stack/stack.js'
import { Text, Input, TextInput } from '@mantine/core'
import { useForm } from '@mantine/form'
import { PublicationsList } from '../publications-list/publications-list.js'

/* eslint-disable-next-line */
export interface SettingsProps {}

export function Settings(props: SettingsProps) {
  //const [f, setF] = {}
  //console.log(process.env.NEXT_PUBLIC_OJS_TOKEN)
  const form = useForm({
    initialValues: {
      token: process.env.NODE_ENV === 'production' ? '' : process.env.NEXT_PUBLIC_OJS_TOKEN,
      endpoint: process.env.NODE_ENV === 'production' ? '' : process.env.NEXT_PUBLIC_OJS_API,
      search: '',
      email: '',
    },

    validate: {
      email: (value) => /^\S[^\s@]*@\S+$/.test(value),
      endpoint: (value) => /^https:\/\/.*?\/api\/v1+$/?.test(value || ''),
    },
  })
  return (
    <VStack
      sx={{
        marginTop: 20,
        marginBottom: 10,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
      }}
    >
      <HStack
        sx={{
          width: '100%',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <TextInput id="token" label="OJS Access token" {...form.getInputProps('token')} />
      </HStack>
      <HStack
        sx={{
          width: '100%',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <TextInput
          id="endpoint"
          label="OJS Api Endpoint"
          //placeholder="https://your-ojs-instance.com/journal-name/index.php/api/v1"
          {...form.getInputProps('endpoint')}
        />
      </HStack>
      <HStack
        sx={{
          width: '100%',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <TextInput
          id="search"
          label="Search for OJS submissions"
          {...form.getInputProps('search')}
        />
      </HStack>
      <HStack
        sx={{
          width: '100%',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <TextInput
          id="crossref"
          {...form.getInputProps('email')}
          label="Email address for crossref check"
        />
      </HStack>
      {form.values.token && form.values.endpoint && form.values.search && (
        <PublicationsList
          {...{
            token: form.values.token,
            endpoint: form.values.endpoint,
            search: form.values.search,
          }}
        />
      )}
    </VStack>
  )
}

export default Settings
