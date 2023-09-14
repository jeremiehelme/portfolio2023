type Props = {
  children?: React.ReactNode,
  className?: string
}
import Button from '@/components/Button'

export default function CTA({ children, className }: Props) {

  return (
    <div className={`${className ?? ''} fixed hidden z-30 lg:flex bottom-5 w-screen max-w-[1300px] left-1/2 -translate-x-1/2 flex-row gap-x-2 items-center`}>
      <p>I&apos;m available in Freelance</p>
      <Button>Let&apos;s Talk !</Button>
      {children}
    </ div>
  )

}