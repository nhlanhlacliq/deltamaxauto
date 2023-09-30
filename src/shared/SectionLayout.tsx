type Props = {
    id: string;
    children: React.ReactNode;
}

const SectionLayout = ({id, children}: Props) => {
  return (
    <section id={id} className="mx-auto min-h-full w-5/6 lg:w-4/6 py-10 bg-white">
        {children}
    </section>
  )
}

export default SectionLayout