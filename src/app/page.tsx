import Image from 'next/image'
import Button from '@/components/Button'
import Menu from '@/components/Menu'
import MenuItem from '@/components/MenuItem'
import Link from 'next/link'
export default function Home() {
  return (
    <main className="">

      <Menu className='max-w-[1300px] fixed z-20 top-0 w-full left-1/2 -translate-x-1/2'>
        <div className='font-bold font-sans text-base'>JH</div>
        <div className='flex flex-row gap-x-8'><MenuItem><Link href='/'>Home</Link></MenuItem><MenuItem><Link href='/'>Services</Link></MenuItem><MenuItem><Link href='/'>Projects</Link></MenuItem></div>
        <div></div>
      </Menu>

      <section className='relative grid grid-cols-12 gap-x-5 justify-between items-center min-h-screen max-w-[1300px] mx-auto'>
        <div className="col-span-4 flex flex-col gap-y-2">
          <h2 className="text-primary font-bold text-3xl leading-tight tracking-tight">Jérémie Helme</h2>
          <h1 className="text-6xl font-sans font-bold leading-[3.7rem] tracking-[-0.3rem] flex flex-col">
            <span className='text-primary'>Fullstack</span>
            <span className="text-secondary">Developer</span>
          </h1>
        </div>

        <div className="col-start-9 col-span-4 flex flex-col gap-y-8 relative z-10">
          <div className='flex flex-col gap-y-3 text-primary'>
            <h3 className="font-bold text-2xl leading-tight tracking-[-0.05rem]">I help <span className='text-secondary'>Startups</span> and <span className='text-secondary'>Agencies</span> build exceptional <span className='text-secondary'>digital products</span></h3>
            <div className="text-xl font-mono font-light leading-base tracking-normal flex flex-col gap-y-2">
              <p>
                I enjoy crafting intuitive and visually appealing applications, for <span className='font-medium'>Web</span> and <span className='font-medium'>Mobile</span>
              </p>
              <p>
                Adaptable, cost-efficient and solution-driven, I’m your trusted partner for <span className='font-medium'>cutting-edge digital solutions</span>
              </p>
            </div>
          </div>
          <Image src={"./clients.png"} alt="jeremie helme - clients" width={385} height={70} priority className='' />
        </div>


        <Image src={"./portrait.png"} alt="jeremie helme - developer" width={573} height={765} priority className='absolute  bottom-0 left-1/2 -translate-x-1/2' />

      </section>


      <div className='fixed bottom-5 w-screen max-w-[1300px] left-1/2 -translate-x-1/2 flex flex-row gap-x-2 items-center'>
        <p>I&apos;m available in Freelance</p>
        <Button>Let&apos;s Talk !</Button>
      </div>


      <section className='relative grid grid-cols-12 gap-x-5 justify-between items-center min-h-screen max-w-[1300px] mx-auto'>

        <div className="col-span-4 flex flex-col gap-y-2">
          <h2 className="text-primary font-bold text-4xl leading-10 tracking-tight">15+ years experience
            as a <span className='text-secondary'>developer</span></h2>
          <Image src={"./logos.svg"} alt="jeremie helme - technologies" width={287} height={76} priority className='' />
        </div>

        <div className="col-start-9 col-span-4 flex flex-col gap-y-8 relative z-10">
          <div className='flex flex-col gap-y-3 text-primary'>
            <h3 className="font-bold text-2xl leading-tight tracking-[-0.05rem]">Specialized in <span className='text-secondary'>web</span> and <span className='text-secondary'>mobile</span> development</h3>
            <div className="text-xl font-mono font-light leading-base tracking-normal flex flex-col gap-y-2">
              <p>
                Skilled in <span className='font-medium'>Vue</span>, <span className='font-medium'>React</span> and <span className='font-medium'>React Native</span>, with a good experience in <span className='font-medium'>back-end</span>, I provide <span className='font-medium'>end-to-end development.</span>
              </p>
              <p>
                Combined with a passion for collaboration and mentoring, it fuels my journey of transforming your ideas into <span className='font-medium'>impactful digital realities.</span>
              </p>
            </div>
          </div>

        </div>


      </section>

    </main>
  )
}
