type Props = {
  children: React.ReactNode,
  className?: string
};

export default function Menu(props: Props) {

  return (
    <section className={`${props.className} py-2 flex flex-row items-center justify-between`}>
      {props.children}
    </section>
  )
}
