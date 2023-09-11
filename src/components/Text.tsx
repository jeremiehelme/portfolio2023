type Props = {
  children: React.ReactNode
};

export default function Text(props: Props) {

  return (
    <div className="text-md lg:text-xl font-mono font-light leading-base tracking-normal flex flex-col gap-y-2">
      {props.children}
    </div>
  )
}
