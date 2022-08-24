import './styles.css'

interface CardProps {
  title: string
  description: string
  path: string
  data: string
  address: string
}

export default function CardAgenda({
  title,
  description,
  path,
  data,
  address,
}: CardProps) {
  return (
    <div className="cardAgenda">
      <div className="cardImgAgenda">
        <img src={path} alt={title} />
      </div>
      <strong className="titleAgenda">{title}</strong>
      <div className="descriptionAgenda">
        <p>{description}</p>
      </div>
      <footer className="flex text-sm justify-between px-4 py-1">
        <p>{address}</p>
        <p>{data}</p>
      </footer>
    </div>
  )
}
