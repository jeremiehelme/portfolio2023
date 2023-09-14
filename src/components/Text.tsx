type Props = {
  children: React.ReactNode,
  className?: string
};

export default function Text(props: Props) {

  return (
    <div className={`${props.className ?? ''} text-md lg:text-xl font-mono font-light leading-base tracking-normal flex flex-col gap-y-2`}>
      {props.children}
    </div>
  )
}
