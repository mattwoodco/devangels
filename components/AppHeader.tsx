import NavLink from './NavLink'
import NavLinkPink from './NavLinkPink'
import { BsTwitter } from 'react-icons/bs'
import { FaDiscord } from 'react-icons/fa'
import LogoHeader from './LogoHeader'

export const Opensea = ({ ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 90 90"
      className="h-7 w-7 transition-all"
    >
      <path
        fill="currentcolor"
        d="M45 0C20.151 0 0 20.151 0 45s20.151 45 45 45 45-20.151 45-45S69.858 0 45 0ZM22.203 46.512l.189-.306 11.709-18.315c.171-.261.576-.234.702.054 1.953 4.383 3.645 9.837 2.853 13.23-.333 1.395-1.26 3.285-2.304 5.031a9.02 9.02 0 0 1-.441.747.397.397 0 0 1-.333.171H22.545a.398.398 0 0 1-.342-.612Zm52.173 6.3a.408.408 0 0 1-.243.378c-.909.387-4.014 1.818-5.301 3.609-3.294 4.581-5.805 11.133-11.43 11.133H33.948c-8.316 0-15.048-6.759-15.048-15.102v-.27c0-.216.18-.396.405-.396h13.068c.261 0 .45.234.432.495a4.397 4.397 0 0 0 .468 2.511 4.594 4.594 0 0 0 4.122 2.556h6.471v-5.049h-6.399a.414.414 0 0 1-.333-.648c.072-.108.144-.216.234-.342a49.469 49.469 0 0 0 2.331-3.717 29.88 29.88 0 0 0 1.611-3.222c.09-.198.162-.405.243-.603.126-.351.252-.684.342-1.008.09-.279.171-.567.243-.837.216-.936.306-1.926.306-2.952 0-.405-.018-.828-.054-1.224-.018-.441-.072-.882-.126-1.323-.036-.387-.108-.774-.18-1.17a24.352 24.352 0 0 0-.369-1.755l-.054-.225c-.108-.405-.207-.783-.333-1.188a44.34 44.34 0 0 0-1.233-3.645c-.162-.459-.342-.9-.531-1.332-.27-.666-.549-1.269-.801-1.836a13.363 13.363 0 0 1-.351-.738 21.95 21.95 0 0 0-.387-.801c-.09-.198-.198-.387-.27-.567l-.792-1.458c-.108-.198.072-.441.288-.378l4.95 1.341h.036l.648.189.72.198.261.072v-2.934C43.866 19.152 45 18 46.413 18c.702 0 1.341.288 1.791.756.459.468.747 1.107.747 1.818v4.365l.531.144c.036.018.081.036.117.063.126.09.315.234.549.414.189.144.387.324.621.513.477.387 1.053.882 1.674 1.449.162.144.324.288.477.441.801.747 1.701 1.62 2.565 2.592.243.279.477.549.72.846.234.297.495.585.711.873.297.387.603.792.882 1.215.126.198.279.405.396.603.36.531.666 1.08.963 1.629.126.252.252.531.36.801.333.738.594 1.485.756 2.241.054.162.09.333.108.495v.036c.054.216.072.45.09.693a7.714 7.714 0 0 1-.126 2.313c-.072.324-.162.63-.27.963-.117.315-.225.639-.369.954a12.946 12.946 0 0 1-.99 1.881c-.126.225-.279.459-.423.684-.162.234-.333.459-.477.675-.207.279-.423.567-.648.828-.198.27-.396.54-.621.783-.306.369-.603.711-.918 1.044-.18.216-.378.441-.585.639-.198.225-.405.423-.585.603-.315.315-.567.549-.783.756l-.513.459a.381.381 0 0 1-.27.108h-3.942v5.049h4.959c1.107 0 2.16-.387 3.015-1.116.288-.252 1.557-1.35 3.06-3.006a.354.354 0 0 1 .189-.117l13.689-3.96a.4.4 0 0 1 .513.387v2.898Z"
      />
    </svg>
  )
}

export default function AppHeader() {
  // const { data: session, status } = useSession()

  return (
    <header>
      <noscript>
        <style>{`.nojs-show { opacity: 1; top: 0; }`}</style>
      </noscript>
      <div className="mx-auto flex max-w-screen-2xl flex-col flex-wrap items-stretch justify-between gap-7 pt-7 md:flex-row md:gap-0 md:pb-7">
        <nav className="md:justify-left order-2 flex flex-1 flex-wrap justify-center px-2 py-5 md:order-1 lg:px-0">
          <NavLink href="/#lore">Lore</NavLink>
          <NavLink href="/#roadmap">The Journey</NavLink>
          <NavLink href="/#team">Team</NavLink>
          <NavLink href="/#faq">FAQ</NavLink>
          <NavLink href="/about-the-artist">The Artist</NavLink>
        </nav>
        <div className="order-1 flex flex-1 items-center md:order-2">
          <div className="mx-auto w-24">
            <NavLink href="/">
              <LogoHeader />
            </NavLink>
          </div>
        </div>
        <nav className="order-3 flex flex-wrap items-center justify-center px-2 text-2xl lg:flex-1 lg:justify-end lg:px-0">
          <NavLink href="http://opensea.io/">
            <Opensea />
          </NavLink>
          <NavLink href="https://discord.gg/jMmsaNSbyK">
            <span className="text-3xl">
              <FaDiscord />
            </span>
          </NavLink>
          <NavLink href="https://twitter.com/TheAngels_NFT">
            <BsTwitter />
          </NavLink>
          <NavLink href="https://medium.com/@cityofangelsnft/where-digital-art-meets-reality-introducing-city-of-angels-5d3f2fcf1896">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 223 127"
              className="h-10 w-10"
            >
              <path
                fill="currentcolor"
                d="M125.638 63.714c0 34.853-27.99 63.107-62.514 63.107S.612 98.567.612 63.714 28.601.607 63.125.607s62.513 28.254 62.513 63.107Zm68.579 0c0 32.81-13.994 59.404-31.258 59.404-17.263 0-31.257-26.597-31.257-59.404S145.696 4.31 162.959 4.31c17.264 0 31.258 26.597 31.258 59.404Zm28.051 0c0 29.395-4.921 53.224-10.994 53.224-6.072 0-10.993-23.829-10.993-53.224s4.921-53.225 10.993-53.225c6.073 0 10.994 23.83 10.994 53.225Z"
              />
            </svg>
          </NavLink>
        </nav>
      </div>
    </header>
  )
}
