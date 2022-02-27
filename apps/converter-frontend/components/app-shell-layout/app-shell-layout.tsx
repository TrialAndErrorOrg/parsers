import {
  Text,
  AppShell,
  Box,
  Burger,
  Header,
  MediaQuery,
  Navbar,
  useMantineTheme,
} from '@mantine/core'
import React, { useState } from 'react'
import { HStack, VStack } from '../stack/stack'
import Image from 'next/image'

/* eslint-disable-next-line */
export interface AppShellLayoutProps {
  children: React.ReactElement
}

export function AppShellLayout(props: AppShellLayoutProps) {
  const { children } = props
  const theme = useMantineTheme()

  const [opened, setOpened] = useState(false)
  return (
    <AppShell
      // navbarOffsetBreakpoint controls when navbar should no longer be offset with padding-left
      navbarOffsetBreakpoint="sm"
      // fixed prop on AppShell will be automatically added to Header and Navbar
      fixed
      header={
        <Header height={70} padding="md">
          {/* Handle other responsive styles with MediaQuery component or createStyles function */}
          <div
            style={{ display: 'flex', alignItems: 'center', height: '100%' }}
          >
            <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>
            <HStack spacing={10}>
              <Image
                src="/favicon.png"
                alt="Journal of Trial and Error"
                width={40}
                height={40}
              />

              <Text>Convert</Text>
            </HStack>
          </div>
        </Header>
      }
      navbar={
        <Navbar
          padding="md"
          // Breakpoint at which navbar will be hidden if hidden prop is true
          hiddenBreakpoint="sm"
          // Hides navbar when viewport size is less than value specified in hiddenBreakpoint
          hidden={!opened}
          // when viewport size is less than theme.breakpoints.sm navbar width is 100%
          // viewport size > theme.breakpoints.sm – width is 300px
          // viewport size > theme.breakpoints.lg – width is 400px
          width={{ sm: 300, lg: 400 }}
        >
          <Navbar.Section>Journal of Trial and Error</Navbar.Section>
          <Navbar.Section grow mt="lg">
            <VStack>
              {['1', '2', '3', '4', '5'].map((num) => (
                <HStack key={num}>
                  <Text>Icon {num}</Text>
                  <Text>Link {num}</Text>
                </HStack>
              ))}
            </VStack>
          </Navbar.Section>
          <Navbar.Section>You!</Navbar.Section>
        </Navbar>
      }
    >
      <Box sx={{ paddingLeft: 20, paddingRight: 20 }}>{children}</Box>
    </AppShell>
  )
}

export default AppShellLayout
