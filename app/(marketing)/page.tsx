'use client'

import { Box, Container, Flex, Heading, Stack, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { Link } from '@saas-ui/react'
import * as React from 'react'

import { FallInPlace } from '#components/motion/fall-in-place'

import './northvale.css'

const Home: NextPage = () => {
  return (
    <Box className="nv-root">
      <HeroSection />
      <PracticeSection />
      <NotesSection />
      <StudioSection />
    </Box>
  )
}

const HeroSection: React.FC = () => {
  return (
    <Box as="section" className="nv-hero" id="home">
      <div className="nv-hero__rule" aria-hidden />
      <Container maxW="container.xl" className="nv-hero__inner">
        <Stack spacing={0} maxW="760px">
          <FallInPlace>
            <p className="nv-kicker">Independent studio · Est. 2014</p>
          </FallInPlace>
          <FallInPlace delay={0.15}>
            <p className="nv-brand">Northvale</p>
          </FallInPlace>
          <FallInPlace delay={0.35}>
            <Heading as="h1" className="nv-headline">
              Research notes, maps, and public records—kept readable.
            </Heading>
          </FallInPlace>
          <FallInPlace delay={0.5}>
            <Text className="nv-lead">
              Northvale is a small studio documenting civic data, climate archives, and
              field notes. We publish slowly, cite sources, and leave the work open to
              revisit.
            </Text>
          </FallInPlace>
          <FallInPlace delay={0.65}>
            <Flex className="nv-cta-row" gap={3} flexWrap="wrap">
              <Link href="#notes" className="nv-btn nv-btn--primary">
                Read the notes
              </Link>
              <Link href="#studio" className="nv-btn nv-btn--ghost">
                Visit the studio
              </Link>
            </Flex>
          </FallInPlace>
        </Stack>
      </Container>
    </Box>
  )
}

const PracticeSection: React.FC = () => {
  return (
    <Box as="section" id="practice" className="nv-section">
      <Container maxW="container.lg">
        <FallInPlace>
          <p className="nv-section-kicker">Practice</p>
          <Heading as="h2" className="nv-section-title">
            How the work is made
          </Heading>
          <Text className="nv-section-lead">
            Three threads run through every Northvale project: evidence, place, and a
            public trail of revisions.
          </Text>
        </FallInPlace>
        <div className="nv-grid">
          <article className="nv-card">
            <h3>Field records</h3>
            <p>
              Interviews, photographs, and site notes compiled with dates, locations, and
              original filenames intact.
            </p>
          </article>
          <article className="nv-card">
            <h3>Civic maps</h3>
            <p>
              Layered maps of land use, watersheds, and public rights-of-way—drawn for
              reading, not dashboards.
            </p>
          </article>
          <article className="nv-card">
            <h3>Open citations</h3>
            <p>
              Sources stay visible. When a figure changes, the previous version remains
              in the archive.
            </p>
          </article>
        </div>
      </Container>
    </Box>
  )
}

const NotesSection: React.FC = () => {
  return (
    <Box as="section" id="notes" className="nv-section nv-section--notes">
      <Container maxW="container.lg">
        <FallInPlace>
          <p className="nv-section-kicker">Journal</p>
          <Heading as="h2" className="nv-section-title">
            Recent notes
          </Heading>
          <Text className="nv-section-lead">
            Short entries from the current season. Longer papers live in the archive.
          </Text>
        </FallInPlace>
        <ul className="nv-notes">
          <li>
            <strong>Tide gauges along the lower Columbia</strong>
            <span>Mar 2026</span>
          </li>
          <li>
            <strong>A working index of county plat maps</strong>
            <span>Jan 2026</span>
          </li>
          <li>
            <strong>Notes from the Deschutes field week</strong>
            <span>Nov 2025</span>
          </li>
        </ul>
      </Container>
    </Box>
  )
}

const StudioSection: React.FC = () => {
  return (
    <Box as="section" id="studio" className="nv-section">
      <Container maxW="container.lg">
        <FallInPlace>
          <p className="nv-section-kicker">Studio</p>
          <Heading as="h2" className="nv-section-title">
            Write to Northvale
          </Heading>
          <Text className="nv-section-lead">
            Collaborations, archive requests, and visiting hours. We reply on weekdays,
            usually within a few days.
          </Text>
          <Link href="mailto:studio@northvale.org" className="nv-btn nv-btn--primary">
            studio@northvale.org
          </Link>
        </FallInPlace>
      </Container>
    </Box>
  )
}

export default Home
