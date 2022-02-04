import { Group, GroupProps } from '@mantine/core'
import React from 'react'

export const HStack = ({ direction = 'row', ...props }: GroupProps) => (
  <Group direction={direction} {...props}></Group>
)

export const VStack = ({ direction = 'column', ...props }: GroupProps) => (
  <Group direction={direction} {...props}></Group>
)
