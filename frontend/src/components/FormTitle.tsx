type Props = {
  title: string
}

export const FormTitle = ({title}: Props) => {
  return (
    <h3>
      {title}
    </h3>
  )
}