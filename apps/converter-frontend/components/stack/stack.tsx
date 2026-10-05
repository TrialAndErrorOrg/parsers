import { Group, GroupProps } from '@mantine/core'
import React from 'react'

export const HStack = ({
  direction = 'row',
  ...props
}: GroupProps & { direction?: 'row' | 'column' }) => (
  <Group sx={{ flexDirection: direction }} {...props} />
)

export const VStack = ({
  direction = 'column',
  ...props
}: GroupProps & { direction?: 'row' | 'column' }) => (
  <Group sx={{ flexDirection: direction }} {...props} />
)
