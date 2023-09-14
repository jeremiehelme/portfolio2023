type Props = {
  children: React.ReactNode,
  className?: string
};

export default function Button({ className, children }: Props) {

  return (
    <button className={`${className ?? ''} bg-primary hover:bg-secondary transition-colors duration-5 text-white px-6 py-2 flex flex-row items-center rounded-2xl`}>
      {children}
    </button>
  )
}
