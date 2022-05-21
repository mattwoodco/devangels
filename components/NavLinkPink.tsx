import Link from 'next/link'

export default function NavLinkPink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <Link href={href} passHref>
      <a style={{color: "#f83efd"}} className="py-3 px-4 uppercase lg:py-7">{children}</a>
    </Link>
  )
}


