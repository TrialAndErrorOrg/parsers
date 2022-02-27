import React from 'react'
import { HStack, VStack } from '../stack/stack'
import { Text, Input, TextInput, InputWrapper } from '@mantine/core'
import { useForm } from '@mantine/hooks'
import { PublicationsList } from '../publications-list/publications-list'

/* eslint-disable-next-line */
export interface SettingsProps {}

export function Settings(props: SettingsProps) {
  //const [f, setF] = {}
  console.log(process.env.NEXT_PUBLIC_OJS_TOKEN)
  const form = useForm({
    initialValues: {
      token:
        process.env.NODE_ENV === 'production'
          ? ''
          : process.env.NEXT_PUBLIC_OJS_TOKEN,
      endpoint:
        process.env.NODE_ENV === 'production'
          ? ''
          : process.env.NEXT_PUBLIC_OJS_API,
      search: '',
      email: '',
    },
    validationRules: {
      email: (value) => /^\S+@\S+$/.test(value),
      endpoint: (value) => /^https:\/\/.*?\/api\/v1+$/.test(value),
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
        <InputWrapper>
          <TextInput
            id="token"
            label="OJS Access token"
            {...form.getInputProps('token')}
          />
        </InputWrapper>
      </HStack>
      <HStack
        sx={{
          width: '100%',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <InputWrapper>
          <TextInput
            id="endpoint"
            label="OJS Api Endpoint"
            //placeholder="https://your-ojs-instance.com/journal-name/index.php/api/v1"
            {...form.getInputProps('endpoint')}
          />
        </InputWrapper>
      </HStack>
      <HStack
        sx={{
          width: '100%',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <InputWrapper>
          <TextInput
            id="search"
            label="Search for OJS submissions"
            {...form.getInputProps('search')}
          />
        </InputWrapper>
      </HStack>
      <HStack
        sx={{
          width: '100%',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <InputWrapper>
          <TextInput
            id="crossref"
            {...form.getInputProps('email')}
            label="Email address for crossref check"
          />
        </InputWrapper>
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
