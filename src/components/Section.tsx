type Props = {
  children?: React.ReactNode,
  className?: string
};

export default function Section({ children, className }: Props) {

  return (
    <section className={`${className ?? ''} relative flex flex-col gap-y-14 lg:grid lg:grid-cols-12 gap-x-5 max-lg:mt-12 max-lg:px-6 justify-between  max-w-[1300px] mx-auto`}>
      {children}
    </section>
  )
}
