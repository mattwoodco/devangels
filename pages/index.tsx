import { address, abi } from '../utils/contract'
import { animatedList, animatedListItem } from '../utils/animations'
import { AnimatePresence, motion } from 'framer-motion'
import { AppLayout } from '../components/AppLayout'
import { Contract, utils } from 'ethers'
import { ellipseAddress } from '../utils/ellipseAddress'
import { useCall, useContractFunction, useEthers } from '@usedapp/core'
import { useState } from 'react'
import Image from 'next/image'
// @ts-ignore
import useDimensions from 'react-use-dimensions'
import { ParallaxClouds } from '../components/ParallaxClouds'
import { teamPeople } from '../utils/data'
import Head from 'next/head'

const contract = new Contract(address, abi)

export default function IndexPage() {
  let cost = false
  const { activateBrowserWallet, account, deactivate, chainId } = useEthers()

  const { state, send } = useContractFunction(
    // @ts-ignore
    contract,
    'publicSaleMint',
    {
      transactionName: 'publicSaleMint',
    }
  )

  const [counter, setCounter] = useState(1)

  const add = () => {
    if (counter === 3) {
      return
    }
    setCounter(counter + 1)
  }

  const subtract = () => {
    if (counter === 1) {
      return
    }
    setCounter(counter - 1)
  }

  function ReadContractFunction(functionName: string) {
    const { value, error } =
      useCall({
        // @ts-ignore
        contract,
        method: functionName, // Method to be called
        args: [], // Method arguments - address to be checked for balance
      }) ?? {}
    if (error) {
      console.error(error.message)
      return undefined
    }
    // console.log(value?.[0])
    return value?.[0]
  }

  cost = ReadContractFunction('publicActive')

  const handleClick = async () => {
    if (chainId !== 4) {
      alert('Please connect to the Rinkeby testnet')
    }

    console.log('cost?')
    console.log(cost)

    const a = send(counter, {
      value: utils.parseEther((counter * 0.05).toString()),
    })
    console.log('hello')
    console.log(a)
    console.log('state', state)
  }

  const [ref, { height }] = useDimensions({ liveMeasure: false })

  return (
    <>
      <Head>
        <title>City of Angels</title>
      </Head>
      <ParallaxClouds containerHeight={height} />
      <AppLayout ref={ref}>
        <div className="flex flex-col gap-16 pt-7 pb-32 lg:pt-20">
          <div className="flex flex-col gap-12 lg:flex-row lg:gap-7 lg:px-7">
            <div className="relative flex flex-1 flex-col items-center gap-7">
              <div className="container relative aspect-[1072/720]">
                <Image
                  src="/logo.png"
                  alt="City of Angels Roadmap"
                  width={1072}
                  height={720}
                  layout="responsive"
                  quality={100}
                />
              </div>
              {account ? (
                <div className="group">
                  <button className="h-20 rounded-2xl bg-[#222222] px-12 py-2 text-2xl uppercase text-[#fef202] group-hover:hidden">
                    <span>Connected</span>
                    <pre className="text-2xl font-bold tracking-tighter text-[#00aeef]">
                      {ellipseAddress(account, 6)}
                    </pre>
                  </button>
                  <button
                    className="hidden h-20 rounded-2xl bg-[#00aeef] px-12 py-2 text-2xl uppercase text-[#fef202] group-hover:block"
                    onClick={() => deactivate()}
                  >
                    <span>Disconnect</span>
                    <pre className="text-2xl font-bold tracking-tighter text-[#222222]">
                      {ellipseAddress(account, 6)}
                    </pre>
                  </button>
                </div>
              ) : (
                <button
                  className="h-20 rounded-2xl bg-[#00aeef] px-12 py-5 text-2xl uppercase text-[#fef202] group-hover:block"
                  onClick={() => activateBrowserWallet()}
                >
                  Connect
                </button>
                // <Siwe className="rounded-2xl bg-[#00aeef] px-12 py-5 text-2xl text-[#fef202]">
                //   CONNECT WALLET
                // </Siwe>
              )}

              {account && cost && (
                <div className="mt-8 flex items-center justify-between gap-3 md:mt-0">
                  <div className="opacity-2 relative flex h-20 w-40 justify-between rounded-2xl bg-[#fef202] text-[#0126b5] md:mt-1 md:w-52 ">
                    <button
                      onClick={subtract}
                      className="h-full w-12 cursor-pointer rounded-l px-3 text-[#00aeef] outline-none hover:text-white md:px-4"
                    >
                      <span className="m-auto text-4xl">−</span>
                    </button>
                    <input
                      type="number"
                      className="md:text-basecursor-default flex w-full appearance-none items-center justify-center bg-transparent pt-1 text-center text-4xl leading-none outline-none hover:text-black focus:text-black focus:outline-none md:ml-4 md:w-20 md:px-2"
                      name="custom-input-number "
                      value={counter}
                    ></input>
                    <button
                      onClick={add}
                      className="hover:bg h-full w-12 cursor-pointer rounded-r px-3 text-[#00aeef] hover:text-white md:px-4"
                    >
                      <span className="m-auto text-4xl">+</span>
                    </button>
                  </div>
                  <button
                    className="h-20 rounded-2xl bg-[#00aeef] px-10 py-5 text-2xl uppercase text-[#fef202] group-hover:block md:px-20"
                    onClick={handleClick}
                  >
                    Mint
                  </button>
                </div>
              )}
            </div>
            <AnimatePresence>
              <motion.div
                className="relative mt-6 grid flex-1 items-start gap-12 px-20 md:mt-0 md:grid-cols-3 md:gap-3 md:px-5 lg:px-0"
                variants={animatedList}
                initial="hidden"
                animate="show"
                exit="hidden"
              >
                {Array.from({ length: 9 }).map((_, i) => (
                  <motion.div
                    className={`block aspect-square cursor-pointer items-center justify-center overflow-hidden rounded-3xl opacity-100 
                    ${i > 2 ? 'hidden md:block' : ''}`}
                    key={i}
                    variants={animatedListItem}
                  >
                    <Image
                      src={`/angels/${i + 1}.png`}
                      alt={`Angel preview ${i}`}
                      width={386}
                      height={386}
                      layout="responsive"
                      quality={100}
                    />
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          <div
            className="relative z-10 flex flex-col gap-10 px-5 text-center text-2xl lg:px-16 lg:text-3xl"
            id="lore"
          >
            <p>
              When love and kindness became unified under one mission, the
              eminence of these forces took the form of a great city. In its
              creation, 5,678 beings were manifested with the mission to spread
              love and kindness throughout the metaverse. These colorful
              spritely beings are known as... THE ANGELS.
            </p>
          </div>

          <div
            className="relative z-10 mx-5 flex flex-col gap-10 rounded-[70px] bg-[#ffff65] px-10 py-16 text-center lg:mx-7 lg:py-16 lg:px-20"
            id="roadmap"
          >
            <div className="text-3xl uppercase text-[#0126b5] lg:text-4xl">
              The Journey
            </div>
            <div className="flex flex-col gap-5 text-xl text-[#c816af] lg:text-xl">
              <p>
                As THE ANGELS descend, their mission of spreading love and
                kindness is tasked through the orders of THE JOURNEY. Their
                mission consists of two phases. In Phase 1, 5678 angels will be
                born. Each ANGEL, once revealed, will then embark into the
                ANGELVERSE where 5 special packages will drop from the Heavens
                with each package increasing in rarity. To the few victorious
                ANGELS able to collect all 5, the title of FULL GLORY will be
                awarded. 1/1 Commissioned pieces (valued over $20k USD) with the
                CITY OF ANGELS Creator, JASON NAYLOR, will be one of the many
                high-level rewards given to those who can achieve FULL GLORY.
              </p>
              <p>
                Once the ANGELVERSE is complete, the CITY OF ANGELS will move
                into Phase 2, THE SHRINE... COMING SOON!
              </p>
            </div>
          </div>

          <div className="container relative mx-auto hidden aspect-[3150/2017] md:block">
            <Image
              src="/roadmap-wide.png"
              alt="City of Angels Roadmap"
              width={3150}
              height={2017}
              layout="responsive"
              quality={100}
            />
          </div>
          <div className="container relative mx-auto aspect-[2342/2655] md:hidden">
            <Image
              src="/roadmap-mobile.png"
              alt="City of Angels Roadmap"
              width={2342}
              height={2655}
              layout="responsive"
              quality={100}
            />
          </div>

          <div className="mx-12 flex flex-col gap-10 rounded-[70px] bg-[#015fff] py-16 text-center md:mx-5 lg:mx-7 lg:py-16 lg:px-20">
            <div className="text-4xl uppercase text-white lg:text-4xl">
              <div>Angelverse Airdrops</div>
              <div className="mt-4 text-2xl uppercase leading-none text-[#053b99] lg:text-4xl">
                Count your blessings
              </div>
            </div>

            <div className="mx-12 grid gap-10 md:mx-0 lg:grid-cols-5">
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  className={`flex aspect-square items-center justify-center rounded-3xl  shadow-2xl`}
                  style={{
                    backgroundColor: `#${
                      ['05adef', 'f97b3e', 'ff57fb', '07fe76', '8302fe'][i]
                    }`,
                    color: `${
                      ['black', 'black', 'black', 'black', 'current'][i]
                    }`,
                  }}
                  key={i}
                >
                  <motion.span whileHover={{ y: -4 }} className="text-7xl">
                    <div className="text-sm">
                      <div>
                        Airdrop {i + 1}
                        <br />
                        <br />
                        <div>&ldquo;_ _ _ _ _&ldquo;</div>
                      </div>
                    </div>
                  </motion.span>
                </div>
              ))}
            </div>
          </div>

          <div
            className="mx-12 flex flex-col gap-10 rounded-[70px] bg-[#9753ff] px-5 py-16 text-center md:mx-5 lg:mx-7 lg:py-16 lg:px-7"
            id="team"
          >
            <div className="uppercase">
              <div className="text-4xl text-white ">Team</div>
            </div>
            <div className="grid gap-7 lg:grid-cols-4 lg:px-12">
              {teamPeople.map((person, i) => (
                <motion.div
                  key={i}
                  className="flex cursor-pointer flex-col gap-3"
                >
                  <div className="aspect-square overflow-hidden rounded-3xl shadow-xl shadow-[#763bcf] transition-all hover:shadow-[#8b56db]">
                    <Image
                      src={person.image}
                      alt={`Photo of ${person.name}`}
                      width={800}
                      height={800}
                      layout="responsive"
                      quality={100}
                    />
                  </div>
                  <div>
                    <h4 className="text-xl uppercase text-black">
                      {person.name}
                    </h4>
                    <div className="leading-xl text text-white">
                      {person.role}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div
            className="mx-5 flex flex-col gap-10 rounded-[70px] bg-[#00FFBA] px-10 py-16  text-[#2C41FF] lg:mx-7 lg:py-16 lg:px-20"
            id="faq"
          >
            <div className="text-center text-4xl uppercase ">FAQ</div>
            <div className="flex flex-col text-[#2C41FF] lg:text-xl">
              <details open>
                <summary>How many ANGEL classes are there?</summary>
                <div>
                  There are 9 known ANGEL classes. Each ANGEL class plays a
                  unique role in maintaining the balance within the CITY OF
                  ANGELS.
                </div>
              </details>
              <hr className="border border-[#2C41FF] opacity-30" />
              <details open>
                <summary>How many ANGELS are there?</summary>
                <div>
                  There will only ever be 5,678 ANGELS in the City of Angels.
                </div>
              </details>
              <hr className="border border-[#2C41FF] opacity-30" />
              <details open>
                <summary>Is there a whitelist?</summary>
                <div>
                  Yes! Our Whitelist (AngelList) can be found exclusively in our
                  discord{' '}
                  <a
                    href="https://discord.gg/jMmsaNSbyK"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    here
                  </a>
                  .
                </div>
              </details>
              <hr className="border border-[#2C41FF] opacity-30" />
              <details open>
                <summary>Where can I find the whitepaper and roadmap?</summary>
                <div>
                  Our whitepaper and roadmap has been published on Medium{' '}
                  <a
                    href={`https://medium.com/@cityofangelsnft/where-digital-art-meets-reality-introducing-city-of-angels-5d3f2fcf1896`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    here
                  </a>
                  .
                </div>
              </details>
              <hr className="border border-[#2C41FF] opacity-30" />
              <details open>
                <summary>Who is Jason Naylor?</summary>
                <div>
                  You can learn more about Jason on the Artist page{' '}
                  <a
                    href={`https://www.cityofangels.io/about-the-artist`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    here
                  </a>
                  .
                </div>
              </details>
              <hr className="border border-[#2C41FF] opacity-30" />
              <details open>
                <summary>How many traits do the ANGELS have?</summary>
                <div>
                  The Angels are made up of over 700 hand-drawn traits, all by
                  our talented artist Jason.
                </div>
              </details>
              <hr className="border border-[#2C41FF] opacity-30" />
              <details open>
                <summary>Why should I mint?</summary>
                <div>
                  If you want to support Jason Naylor&apos;s work, participate
                  in the airdrops of the ANGELVERSE, own the access pass to THE
                  SHRINE, and become a part of the City of Angels
                  community...you might want to mint! :)
                </div>
              </details>
            </div>
          </div>
        </div>
      </AppLayout>
    </>
  )
}
