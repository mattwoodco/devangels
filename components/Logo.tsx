import Link from 'next/link'
import Image from 'next/image'

export default function NavLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return <Image src="/test.png" alt="City of Angels logo" />
}
