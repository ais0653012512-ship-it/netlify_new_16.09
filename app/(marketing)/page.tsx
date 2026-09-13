'use client'

import { Box, Container, Flex, Heading, Stack, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { Link } from '@saas-ui/react'
import * as React from 'react'

import { FallInPlace } from '#components/motion/fall-in-place'

import './harborline.css'

const Home: NextPage = () => {
  return (
    <Box className="hl-root">
      <HeroSection />
      <ServicesSection />
      <StatusSection />
      <ContactSection />
    </Box>
  )
}

const HeroSection: React.FC = () => {
  return (
    <Box as="section" className="hl-hero" id="home">
      <div className="hl-hero__atmosphere" aria-hidden />
      <div className="hl-hero__grain" aria-hidden />
      <Container maxW="container.xl" className="hl-hero__inner">
        <Stack spacing={{ base: 6, md: 8 }} maxW="720px">
          <FallInPlace>
            <p className="hl-brand">Harborline</p>
          </FallInPlace>

          <FallInPlace delay={0.25}>
            <div className="hl-status-row" role="status">
              <span className="hl-status-dot" aria-hidden />
              <span className="hl-status-label">All Systems Operational</span>
            </div>
          </FallInPlace>

          <FallInPlace delay={0.4}>
            <Heading as="h1" className="hl-headline">
              Infrastructure that stays underway.
            </Heading>
          </FallInPlace>

          <FallInPlace delay={0.55}>
            <Text className="hl-lead">
              Harborline runs resilient edge networks and status-aware platforms for teams that
              need calm reliability—not noise.
            </Text>
          </FallInPlace>

          <FallInPlace delay={0.7}>
            <Flex className="hl-cta-row" gap={3} flexWrap="wrap">
              <Link href="#contact" className="hl-btn hl-btn--primary">
                Contact
              </Link>
              <Link href="#" className="hl-btn hl-btn--ghost">
                Documentation
              </Link>
            </Flex>
          </FallInPlace>
        </Stack>
      </Container>
    </Box>
  )
}

const ServicesSection: React.FC = () => {
  return (
    <Box as="section" id="services" className="hl-section">
      <Container maxW="container.lg">
        <FallInPlace>
          <p className="hl-section-kicker">Services</p>
          <Heading as="h2" className="hl-section-title">
            Built for continuous operations
          </Heading>
          <Text className="hl-section-lead">
            Edge routing, observability hooks, and failover paths designed so your customers
            never notice the weather.
          </Text>
        </FallInPlace>
        <div className="hl-services">
          <div>
            <h3>Edge delivery</h3>
            <p>Regional points of presence with health-checked routing and graceful drain.</p>
          </div>
          <div>
            <h3>Platform uptime</h3>
            <p>Status surfaces, incident chronology, and clear recovery windows for operators.</p>
          </div>
          <div>
            <h3>Secure connectivity</h3>
            <p>Encrypted transport defaults and scoped access for partner integrations.</p>
          </div>
        </div>
      </Container>
    </Box>
  )
}

const StatusSection: React.FC = () => {
  return (
    <Box as="section" id="status" className="hl-section hl-section--status">
      <Container maxW="container.lg">
        <FallInPlace>
          <p className="hl-section-kicker">Reliability</p>
          <Heading as="h2" className="hl-section-title">
            System status
          </Heading>
          <Text className="hl-section-lead">
            Live operational summary for Harborline production systems. No open incidents at this
            time.
          </Text>
        </FallInPlace>
        <ul className="hl-status-list">
          <li>
            <span>Core API</span>
            <span className="hl-pill">Operational</span>
          </li>
          <li>
            <span>Edge network</span>
            <span className="hl-pill">Operational</span>
          </li>
          <li>
            <span>Status &amp; alerts</span>
            <span className="hl-pill">Operational</span>
          </li>
        </ul>
      </Container>
    </Box>
  )
}

const ContactSection: React.FC = () => {
  return (
    <Box as="section" id="contact" className="hl-section">
      <Container maxW="container.lg">
        <FallInPlace>
          <p className="hl-section-kicker">Contact</p>
          <Heading as="h2" className="hl-section-title">
            Talk to operations
          </Heading>
          <Text className="hl-section-lead">
            For status questions or partnership inquiries, reach the Harborline desk. We respond
            during business hours in your region.
          </Text>
          <Link href="mailto:status@harborline.io" className="hl-btn hl-btn--primary">
            status@harborline.io
          </Link>
        </FallInPlace>
      </Container>
    </Box>
  )
}

export default Home
