type Props = {
  children?: React.ReactNode,
  className?: string
};

export default function Card({ children, className = '' }: Props) {

  return (
    <div className={`${className} p-6 md:p-8 md:pl-0 bg-white rounded-xl col-span-6 grid grid-cols-6 gap-x-5`}>
      {children}
    </div>
  )
}
