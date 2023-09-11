import Image from 'next/image'
import Link from 'next/link'
import Button from '@/components/Button'
import Menu from '@/components/Menu'
import MenuItem from '@/components/MenuItem'
import Title2 from '@/components/Title2'
import Text from '@/components/Text'

export default function Home() {
  return (
    <main className="pb-20">

      <Menu className='max-w-[1300px] max-lg:px-6 fixed z-20 top-0 w-full left-1/2 -translate-x-1/2'>
        <div className='font-bold font-sans text-base'>JH</div>
        <div className='hidden lg:flex absolute top-3 left-1/2 -translate-x-1/2  flex-row gap-x-8'><MenuItem><Link href='/'>Home</Link></MenuItem><MenuItem><Link href='/'>Services</Link></MenuItem><MenuItem><Link href='/'>Projects</Link></MenuItem></div>
        <div className='lg:hidden'>-</div>
      </Menu>

      <section className='relative max-lg:flex max-lg:flex-col max-lg:gap-y-8 lg:grid lg:grid-cols-12 gap-x-5 max-lg:mt-24 max-lg:px-6 justify-between items-center h-screen max-h-[765px] max-w-[1300px] mx-auto'>
        <div className="max-lg:w-full col-span-4 flex flex-col gap-y-2">
          <h2 className="text-primary font-bold text-xl lg:text-2xl leading-tight tracking-tight">Jérémie Helme</h2>
          <h1 className="relative z-20 text-4xl lg:text-6xl font-sans font-bold leading-[2rem] lg:leading-[3.2rem] tracking-[-0.1rem] lg:tracking-[-0.3rem] flex flex-col">
            <span className='text-primary'>Fullstack</span>
            <span className="text-secondary">Developer</span>
          </h1>
        </div>

        <div className="col-start-9 col-span-4 flex flex-col gap-y-8 relative z-10">
          <div className='flex flex-col gap-y-3 text-primary'>
            <Title2>I help <span className='text-secondary'>Startups</span> and <span className='text-secondary'>Agencies</span> build exceptional <span className='text-secondary'>digital products</span></Title2>
            <Text>
              <p>
                I enjoy crafting intuitive and visually appealing applications, for <span className='font-medium'>Web</span> and <span className='font-medium'>Mobile</span>
              </p>
              <p>
                Adaptable, cost-efficient and solution-driven, I’m your trusted partner for <span className='font-medium'>cutting-edge digital solutions</span>
              </p>
            </Text>
          </div>
          <Image src={"./clients.png"} alt="jeremie helme - clients" width={385} height={70} priority />
        </div>


        <Image src={"./portrait.png"} className='hidden lg:block absolute top-20 left-1/2 -translate-x-1/2' alt="jeremie helme - developer" width={573} height={765} priority />

      </section>


      <div className='fixed hidden lg:flex bottom-5 w-screen max-w-[1300px] left-1/2 -translate-x-1/2 flex-row gap-x-2 items-center'>
        <p>I&apos;m available in Freelance</p>
        <Button>Let&apos;s Talk !</Button>
      </div>


      <section className='relative flex flex-col gap-y-14 lg:grid lg:grid-cols-12 gap-x-5 max-lg:mt-12 max-lg:px-6 justify-between items-center h-screen max-h-[600px] max-w-[1300px] mx-auto'>

        <div className="col-span-4 flex flex-col gap-y-8 lg:gap-y-2">
          <h2 className="text-primary font-bold text-3xl lg:text-4xl leading-8 lg:leading-10 tracking-tight">
            15+ years experience as a <span className='text-secondary'>developer</span>
          </h2>
          <Image src={"./logos.svg"} alt="jeremie helme - technologies" width={287} height={76} className='' />
        </div>

        <div className="col-start-9 col-span-4 flex flex-col gap-y-8 relative z-10">
          <div className='flex flex-col gap-y-3 text-primary'>
            <Title2>Specialized in <span className='text-secondary'>web</span> and <span className='text-secondary'>mobile</span> development</Title2>
            <Text>
              <p>
                Skilled in <span className='font-medium'>Vue</span>, <span className='font-medium'>React</span> and <span className='font-medium'>React Native</span>, with a good experience in <span className='font-medium'>back-end</span>, I provide <span className='font-medium'>end-to-end development solutions</span>
              </p>
              <p>
                Combined with a passion for collaboration and mentoring, it fuels my journey of transforming your ideas into <span className='font-medium'>impactful digital realities.</span>
              </p>
            </Text>
          </div>

        </div>


      </section>

    </main>
  )
}
