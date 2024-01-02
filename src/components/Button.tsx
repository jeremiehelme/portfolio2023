type Props = {
  children: React.ReactNode,
  className?: string
  variant?: 'primary' | 'secondary'
};

export default function Button({ className, children, variant = 'primary' }: Props) {
  const hoverColor = variant === 'primary' ? 'secondary' : 'primary';
  return (
    <button className={`${className ?? ''} bg-${variant} hover:bg-${hoverColor} transition-colors duration-5 text-white px-6 py-2 flex flex-row items-center rounded-2xl`}>
      {children}
    </button>
  )
}
