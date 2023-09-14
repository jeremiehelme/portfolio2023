type Props = {
  children: React.ReactNode,
  className?: string
};

export default function Title2(props: Props) {

  return (
    <h2 className={`${props.className ?? ''} font-bold text-xl lg:text-2xl leading-tight tracking-[-0.05rem]`}>
      {props.children}
    </h2>
  )
}
