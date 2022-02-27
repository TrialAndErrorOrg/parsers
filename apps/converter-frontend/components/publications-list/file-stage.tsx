import { Box, Button, Text } from '@mantine/core'
import { definitions } from 'ojs-client'
import React from 'react'
import { GenericIcon } from '../ext-icon/ext-icon'
import { HStack } from '../stack/stack'

export const FileStage = (props: {
  submissionId: number
  stageId: number
  apiToken: string
  endpoint: string
  data: definitions['SubmissionFile'][]
}) => {
  const { submissionId, stageId, apiToken, endpoint, data } = props

  return (
    <HStack
      spacing={20}
      sx={{
        overflowX: 'scroll',
        maxHeight: 500,
        display: 'flex',
        alignItems: 'baseline',
        flexWrap: 'wrap',
      }}
    >
      {data.map((item: definitions['SubmissionFile']) => (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            width: 200,
          }}
          key={JSON.stringify(item.name)}
        >
          <Box sx={{ width: 100 }} key={JSON.stringify(item.name)}>
            <GenericIcon type={item?.documentType || ''} />
          </Box>
          <Text
            size="xs"
            sx={{
              width: '70%',
              textAlign: 'center',
              overflowX: 'hidden',
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              lineHeight: '1em',
              maxHeight: '2em',

              /* The number of lines to be displayed */
              '-webkit-line-clamp': 2,
              '-webkit-box-orient': 'vertical',
              whiteSpace: 'unset',
              wordBreak: 'break-all',
            }}
          >
            {item.name?.en_US}
          </Text>
          <Button onClick={() => console.log(item._href)}>Convert</Button>
        </Box>
      ))}
    </HStack>
  )
}
