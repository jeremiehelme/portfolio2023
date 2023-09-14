import Image from 'next/image'
import Link from 'next/link'
import CTA from '@/components/CTA'
import Menu from '@/components/Menu'
import MenuItem from '@/components/MenuItem'
import Title2 from '@/components/Title2'
import SectionTitle from '@/components/SectionTitle'
import Section from '@/components/Section'
import Text from '@/components/Text'
import Card from '@/components/cards/Card'
import CardTitle from '@/components/cards/CardTitle'
import CardIcon from '@/components/cards/CardIcon'

export default function Home() {
  return (
    <main className="pb-20">

      <Menu className='max-w-[1300px] max-lg:px-6 fixed z-20 top-0 w-full left-1/2 -translate-x-1/2'>
        <div className='font-bold font-sans text-base'>JH</div>
        <div className='hidden lg:flex absolute top-3 left-1/2 -translate-x-1/2 flex-row gap-x-8'><MenuItem><Link href='/'>Home</Link></MenuItem><MenuItem><Link href='/'>Services</Link></MenuItem><MenuItem><Link href='/'>Projects</Link></MenuItem></div>
        <div className='lg:hidden'>-</div>
      </Menu>


      <CTA />


      <Section className='h-screen min-h-[700px] max-h-[900px] items-center'>
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

      </Section>

      <Section className='mt-32  min-h-[30vh]'>

        <div className="col-span-4 flex flex-col gap-y-8 lg:gap-y-2">
          <SectionTitle>
            15+ years experience <br />as a <span className='text-secondary'>developer</span>
          </SectionTitle>
          <Image src={"./logos.svg"} alt="jeremie helme - technologies" width={287} height={76} className='' />
        </div>

        <div className="col-start-7 col-span-6 flex flex-col gap-y-8 relative z-10">
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


      </Section>

      <Section className='mt-32 h-screen auto-rows-min gap-y-8'>
        <div className="col-span-4 flex flex-col gap-y-8 lg:gap-y-2">
          <SectionTitle>
            Services
          </SectionTitle>
        </div>

        <Card className="col-start-1">
          <CardIcon>
            <Image src={"./web-development.svg"} alt="jeremie helme - web development" width={40} height={40} className='mt-1' />
          </CardIcon>

          <div className='col-start-2 col-span-4 flex flex-col gap-y-5'>
            <CardTitle>
              <span className="text-secondary">Fullstack</span><br />
              development
            </CardTitle>
            <Text>
              I translate UI/UX designs into interactive and engaging interfaces using modern front-end frameworks,
              encompassing both front and back-end to build ready to launch solutions
            </Text>
          </div>

        </Card>

        <Card className="col-start-7">
          <CardIcon>
            <Image src={"./phone.svg"} alt="jeremie helme - mobile development" width={44} height={44} className='mt-1' />
          </CardIcon>

          <div className='col-start-2 col-span-4 flex flex-col gap-y-5'>
            <CardTitle>
              <span className="text-secondary">Mobile</span><br />
              development
            </CardTitle>
            <Text>
              I develop cross-platform mobile apps with performance and user interaction in mind and Implement APIs to seamlessly connect with back-end services
            </Text>
          </div>

        </Card>

        <Card className="col-start-1 grid grid-cols-6 gap-x-8">
          <CardIcon>
            <Image src={"./agencies.svg"} alt="jeremie helme - for agencies" width={44} height={44} className='mt-1' />
          </CardIcon>

          <div className='col-start-2 col-span-4 flex flex-col gap-y-5'>
            <CardTitle>
              For<br />
              <span className="text-secondary">Agencies</span>
            </CardTitle>
            <Text>
              <p className="font-medium">Add versatility to your arsenal</p>My capacity to architect end-to-end solutions expedites project timelines and empowers you to deliver cutting-edge digital experiences to your clients.
            </Text>
          </div>

        </Card>

        <Card className="col-start-7">
          <CardIcon>
            <Image src={"./startup.svg"} alt="jeremie helme - for startup" width={44} height={44} className='mt-1' />
          </CardIcon>

          <div className='col-start-2 col-span-4 flex flex-col gap-y-5'>
            <CardTitle>
              For<br />
              <span className="text-secondary">Startups</span>
            </CardTitle>
            <Text>
              <p className="font-medium">Launch your POCs and MVPs in no time</p>
              Optimize resource allocation and product iterations. Go swiftly from concept to market-ready solutions
            </Text>
          </div>

        </Card>


      </Section>

    </main>
  )
}
