type Props = {
  children?: React.ReactNode,
  className?: string
};

export default function Section({ children, className }: Props) {

  return (
    <section className={`${className ?? ''} mt-20 lg:mt-24 max-lg:px-6 relative flex flex-col gap-y-14 lg:grid lg:grid-cols-12 gap-x-5  justify-between  max-w-[1300px] mx-auto`}>
      {children}
    </section>
  )
}
