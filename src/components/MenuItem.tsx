type Props = {
  children: React.ReactNode,
  className?: string
};

export default function MenuItem(props: Props) {

  return (
    <div className={`${props.className} font-bold font-sans text-base text-primary hover:text-secondary transition-colors duration-300`}>
      {props.children}
    </div>
  )
}
