'use client';

import Image from 'next/image'
import CTA from '@/components/CTA'
import Menu from '@/components/Menu'
import Button from '@/components/Button'
import Title2 from '@/components/Title2'
import SectionTitle from '@/components/SectionTitle'
import Section from '@/components/Section'
import Text from '@/components/Text'
import Card from '@/components/cards/Card'
import CardTitle from '@/components/cards/CardTitle'
import CardIcon from '@/components/cards/CardIcon'
import Link from "next/link";

export default function Home() {

  function scrollToId(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    e.preventDefault();
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <main className="pb-20">

      <Menu className='max-w-[1300px] max-xl:px-6 fixed z-20 top-0 w-full left-1/2 -translate-x-1/2'>
        <div className='font-bold font-sans text-base'>JH</div>
      </Menu>


      


      <Section className='max-lg:gap-y-10  min-h-[600px] h-[70vh] lg:h-[85vh] max-h-[800px] lg:pt-[2vh] lg:items-center'>
        <div className="col-span-4 flex flex-col gap-y-2 max-lg:pt-20">
          <h2 className="text-primary font-bold text-xl lg:text-[1.875rem] leading-tight tracking-[-0.11rem]">Jérémie Helme</h2>
          <h1 className="relative z-20 text-4xl lg:text-[3.125rem] leading-[2rem] lg:leading-[2.81rem] tracking-[-0.1rem] lg:tracking-[-0.15rem]  font-sans font-bold flex flex-col">
            <span className='text-primary'>Fullstack</span>
            <span className="text-secondary">Developer</span>
          </h1>
        </div>

        <div className="w-full lg:col-start-9 col-span-4 flex flex-col gap-y-8 relative z-10 items-start">
          <div className='w-full  flex flex-col gap-y-8 text-primary'>
            <Title2>I help <span className='text-secondary'>Startups</span> and <span className='text-secondary'>Agencies</span> transform ideas into <span className='text-secondary'>market-ready digital solutions</span></Title2>
            <Text className='gap-y-3'>
              <p className="flex flex-row gap-x-2 items-center">
                <Image src={"./check.svg"} alt="Web applications" width={20} height={20} priority className="w-[20px] object-fit h-[20px]" />
                Full-stack web applications
              </p>
              <p className="flex flex-row gap-x-2 items-center">
                <Image src={"./check.svg"} alt="Web applications" width={20} height={20} priority className="w-[20px] object-fit h-[20px]" />
                Cross-platform mobile apps
              </p>
              <p className="flex flex-row gap-x-2 items-center">
                <Image src={"./check.svg"} alt="Web applications" width={20} height={20} priority className="w-[20px] object-fit h-[20px]" />
                End-to-end digital solutions
              </p>
            </Text>
            <div className="flex flex-row gap-x-4">
              <a href='https://www.linkedin.com/in/jeremiehelme/'><Button variant="secondary">View LinkedIn</Button></a>
              <Link href='#more' onClick={scrollToId}><Button>See my work</Button></Link>
            </div>
          </div>

        </div>


        <Image src={"./portrait.png"} className='max-lg:hidden lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:left-1/2 lg:-translate-x-[62%] w-auto max-w-[520px]' alt="jeremie helme - developer" width={520} height={705} priority />

      </Section>

      <div id="more" className='w-full max-lg:px-6 lg:h-[15vh] flex items-center justify-center'>
        <Image src={"./clients.svg"} alt="jeremie helme - clients" width={350} height={70} priority className="w-full object-fit mx-auto h-[100px]" />
      </div>


      <Section className='auto-rows-min gap-y-8 !mt-32'>
        <div className="col-span-4 flex flex-col">
          <SectionTitle>
            Services
          </SectionTitle>
        </div>

        <Card className="col-start-1">
          <CardIcon>
            <Image src={"./web-development.svg"} alt="jeremie helme - web development" width={44} height={44} className='mt-1 mr-2' />
          </CardIcon>

          <div className='col-start-2 col-span-4 flex flex-col gap-y-5'>
            <CardTitle>
              <span className="text-secondary">Fullstack</span><br />
              development
            </CardTitle>
            <Text>
              I transform UI/UX designs into interactive, engaging interfaces using modern frameworks. From responsive front-end experiences to robust back-end architecture, I deliver complete, production-ready solutions.
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
              I build high-performance, cross-platform mobile applications that prioritize user experience. Each app integrates seamlessly with back-end services through robust APIs, ensuring smooth functionality across devices.
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
              <p className="font-medium">Expand your capabilities</p>My expertise in full-stack development accelerates project delivery and enables you to offer comprehensive digital solutions to your clients. From concept to deployment, I handle the technical complexity.
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
              <p className="font-medium">Fast-track your product development</p>
              I help you build and iterate quickly, turning concepts into market-ready solutions. Maximize your resources while minimizing time to market with proven development processes.
            </Text>
          </div>

        </Card>

      </Section>



      <Section className='auto-rows-min gap-y-8 gap-x-20 !mt-32'>
        <div className="col-span-4 flex flex-col">
          <SectionTitle>
            Testimonials
          </SectionTitle>
        </div>


        <div className='col-start-1 col-span-6 flex flex-row gap-x-4'>
          <div className='w-fit text-center flex flex-col items-center  text-[14px]'>
            <Image src={"./yannick-bazin.png"} alt="yannick bazin - client" width={50} height={50} priority className="mb-2" />
            Yannick Bazin<br /><i>BY Connect</i></div>
          <div className='flex-1'>
            <p><strong>Application BtoB - Salon Ecommerce</strong></p>
            <p>We entrusted Jérémie with the development of our mobile application. We are very satisfied - he respected the timeline, the app is stable, works perfectly, and has been used without any issues for over 3 years by dozens of exhibitors. This makes all the difference and shows true professionalism.</p>
          </div>
        </div>

        <div className='col-span-6 flex flex-row gap-x-4'>
          <div className='w-fit text-center flex flex-col items-center text-[14px]'>
            <Image src={"./sebastien-cramon.png"} alt="sebastien Cramon - client" width={50} height={50} priority className="mb-2" />
            Sebastien Cramon<br /><i>Flairplay</i>
          </div>
          <div className='flex-1 '>
            <p><strong>Sports Mobile Marketplace</strong></p>
            <p>I worked with Jérémie on developing our mobile application for iOS and Android. 
              Jérémie showed real initiative in proposing effective solutions to our challenges.
              His commitment and flexibility, despite constant adjustments, were key to completing our project!
            </p>
            <p>A big thank you!</p>
          </div>
        </div>
      </Section>

      <a href='https://www.linkedin.com/in/jeremiehelme/'><Button className='w-fit mx-auto mt-14'>Start Your Project</Button></a>

      <Section className='min-h-[30vh] pt-16 mt-16'>

        <div className="col-span-4 flex flex-col gap-y-8 lg:gap-y-2">
          <SectionTitle>
            15+ years experience <br />as a <span className='text-secondary'>developer</span>
          </SectionTitle>
          <Image src={"./logos.svg"} alt="jeremie helme - technologies" width={287} height={76} className="h-auto" />
        </div>

        <div className="col-start-7 col-span-5 flex flex-col gap-y-8 relative z-10 max-lg:pt-16">
          <div className='flex flex-col gap-y-3 text-primary'>
            <Title2>Specialized in <span className='text-secondary'>web</span> and <span className='text-secondary'>mobile</span> development</Title2>
            <Text>
              <p>
                Expert in <span className='font-medium'>Vue</span>, <span className='font-medium'>React</span>, and <span className='font-medium'>React Native</span>, with extensive experience in <span className='font-medium'>native mobile development and back-end systems</span>. I deliver <span className='font-medium'>complete development solutions</span> from database to deployment.
              </p>
              <p>
                My collaborative approach and passion for mentoring drive me to transform your vision into <span className='font-medium'>successful digital products</span> that make a real impact.
              </p>
            </Text>
          </div>
          <a href='https://www.linkedin.com/in/jeremiehelme/'><Button className='w-fit'>Get Started</Button></a>

        </div>


      </Section>

      
    </main >
  )
}
