type Props = {
  children?: React.ReactNode,
  className?: string,
  id?: string,
};

export default function Section({ children, className, id = "" }: Props) {

  return (
    <section id={`${id}`} className={`${className ?? ''} relative flex flex-col lg:grid lg:grid-cols-12 max-xl:px-6 lg:gap-y-14 gap-x-5  max-w-[1300px] mx-auto`}>
      {children}
    </section>
  )
}
