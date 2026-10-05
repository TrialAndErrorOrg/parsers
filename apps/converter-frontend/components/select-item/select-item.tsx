import React, { forwardRef } from 'react'
import { Text, Group, Avatar, SelectItemProps as OldSelectItemProps } from '@mantine/core'
/* eslint-disable-next-line */
export interface SelectItemProps extends OldSelectItemProps {
  description: string
  image: React.ReactElement
}

export const SelectItem = forwardRef<HTMLDivElement, SelectItemProps>(
  ({ label, value, image, description, ...others }: SelectItemProps, ref) => (
    <div ref={ref} {...others}>
      <Group noWrap>
        {image}
        <div>
          <Text>{label}</Text>
          <Text size="xs" color="dimmed">
            {description}
          </Text>
        </div>
      </Group>
    </div>
  ),
)

export default SelectItem
