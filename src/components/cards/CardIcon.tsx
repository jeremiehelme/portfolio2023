type Props = {
  children?: React.ReactNode,
  className?: string
};



export default function CardIcon({ className, children }: Props) {

  return (
    <div className={`${className ?? ''} col-start-1 col-span-1 flex items-start justify-end`}>
      {children}
    </div>

  )

}