import Link from 'next/link'

export default function NavLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <Link href={href} passHref>
      <a className="py-3 px-4 uppercase transition hover:text-[#fef202] lg:py-7">
        {children}
      </a>
    </Link>
  )
}
