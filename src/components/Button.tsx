type Props = {
  children: React.ReactNode
};

export default function Button(props: Props) {

  return (
    <button className="bg-primary hover:bg-secondary transition-colors duration-5 text-white px-6 py-2 flex flex-row items-center rounded-2xl">
      {props.children}
    </button>
  )
}
