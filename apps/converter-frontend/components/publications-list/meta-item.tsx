import { definitions } from 'ojs-client'
import React from 'react'
import { Text } from '@mantine/core'
import { VStack } from '../stack/stack'
import { RenderPubMeta } from './render-pub-meta'

export const MetaItem = ({
  datakey,
  value,
  extra,
  options,
}: {
  datakey: keyof definitions['Publication']
  value: definitions['Publication'][typeof datakey]
  extra?: any
  options?: { showEmpty?: boolean }
}) => {
  //console.log(value)
  return (
    <VStack spacing={2} sx={{ alignItems: 'flex-start' }} key={datakey}>
      {/* @ts-expect-error booo  */}
      {!value && !value?.en_US && !options?.showEmpty ? null : (
        <Text size="xs" color="dimmed">
          {datakey}
        </Text>
      )}
      <RenderPubMeta {...{ options, extra, datakey, value }} />
    </VStack>
  )
}
