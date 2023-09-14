
type Props = {
    children: React.ReactNode,
    className?: string
}
export default function SectionTitle(props: Props) {
    return (
        <h2 className={`${props.className ?? ''} text-primary font-bold text-3xl lg:text-4xl leading-8 lg:leading-10 tracking-tight`} >
            {props.children}
        </h2>

    )
}