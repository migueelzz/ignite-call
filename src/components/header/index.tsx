import { Heading } from '@ignite-ui/react'
import Image from 'next/image'
import { Container } from './styles'
import Link from 'next/link'

export function Header() {
  return (
    <Container>
      <Link href="/">
        <Image
          src="/logo.svg"
          width={40}
          height={40}
          quality={100}
          alt="Logo Ignite"
        />

        <Heading>Ignite Call</Heading>
      </Link>
    </Container>
  )
}
