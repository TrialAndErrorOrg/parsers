import { Loader, Tabs, Text } from '@mantine/core'
import { paths, definitions } from 'ojs-client'
import React from 'react'
import useSWR from 'swr'
import { FileStage } from './file-stage.js'

export const FileReel = (props: {
  data: Exclude<
    paths['/submissions']['get']['responses']['200']['schema']['items'],
    undefined
  >[number]
  apiToken: string
  endpoint: string
}) => {
  const { data: olddata, apiToken, endpoint } = props
  const { id, stages, stageId } = olddata

  const { data, error } = useSWR(
    `/api/ojs/files?apiToken=${apiToken}&submissionId=${id}&stageId=${stageId}&endpoint=${encodeURIComponent(
      endpoint,
    )}`,
  )
  if (!data) {
    return <Loader />
  }
  if (error) {
    return <Text color="red">{JSON.stringify(error)}</Text>
  }

  if (!data.items) {
    return <Text> No Files </Text>
  }

  if (!stageId) {
    return <></>
  }

  const getStageId = (file: definitions['SubmissionFile']): number =>
    parseInt(file?.url?.slice(-1) || '0')

  /**
   * OJS doesnt just give a stage id per file....
   */
  //console.log(data?.items[data?.items?.length - 1])
  const furthestStage = getStageId(data?.items[data?.items?.length - 1])

  const reviewRounds = furthestStage === 5 ? 1 : furthestStage === 7 ? 2 : 0

  //console.log(furthestStage)
  const stagesss = [
    '',
    'Submission',
    ...(new Array(reviewRounds)?.flatMap((_, index) => [
      `Pre-Review ${index + 1}`,
      `Post-Review ${index + 1}`,
    ]) || []),
    'Pre-Copyediting',
    'Post-Copyediting',
    'Production',
  ]

  const sortedFiles: { [key: number]: definitions['SubmissionFile'][] } = data.items.reduce(
    (
      acc: { [key: number]: definitions['SubmissionFile'][] },
      curr: definitions['SubmissionFile'],
    ) => {
      const id = getStageId(curr)
      if (!id) {
        return
      }
      acc[id] = [...(acc?.[id] || []), curr]
      return acc
    },
    {} as { [key: number]: definitions['SubmissionFile'][] },
  )

  return (
    <Tabs defaultValue={'production'}>
      {Object.entries(sortedFiles).map(([stageId, data]) => {
        const stageInt = parseInt(stageId) ?? 0
        //console.log(stageInt)
        //console.log(data)
        return (
          <Tabs.Tab value={stagesss[stageInt] ?? 'production'} key={stagesss[stageInt]}>
            <FileStage
              {...{
                submissionId: id!,
                data,
                stageId: stageInt,
                apiToken,
                endpoint,
              }}
            />
          </Tabs.Tab>
        )
      })}
    </Tabs>
  )
}
