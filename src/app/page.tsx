import Image from 'next/image'
import Button from '@/components/Button'
export default function Home() {
  return (
    <main className="">

      <section className='relative grid grid-cols-12 gap-x-5 justify-between items-center min-h-screen max-w-[1300px] mx-auto'>
        <div className="col-span-4 flex flex-col gap-y-2">
          <h2 className="text-primary font-bold text-3xl leading-3xl tracking-tight">Jérémie Helme</h2>
          <h1 className="text-6xl font-sans font-bold leading-[60px] tracking-[-0.3rem] flex flex-col">
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


      <div className='fixed bottom-5 right-5 flex flex-row gap-x-2 items-center'>
        <p>I&apos;m available in Freelance</p>
        <Button>Let&apos;s Talk !</Button>
      </div>

      <section className='relative min-h-screen max-w-[1300px] mx-auto'>
        <div className="absolute top-1/2 -translate-y-1/2">
          <h2 className="text-primary font-bold text-3xl leading-3xl tracking-tight">15+ years experience
            as a <span className='text-secondary'>developer</span></h2>

          <h1 className="text-primary text-5xl leading-5xl tracking-normal">Front-end<br />Developer</h1>
        </div>
      </section>

    </main>
  )
}
