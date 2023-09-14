type Props = {
  children?: React.ReactNode,
  className?: string
};

export default function CardTitle({ className, children }: Props) {

  return (
    <h5 className={`${className ?? ''} text-primary font-bold text-xl lg:text-3xl leading-5 lg:leading-7 tracking-tight`}>
      {children}
    </h5>
  )
}
