interface IServiceItem {
    image: string
    title: string
    description: string
}

export function ServiceItem( { image, title, description }: IServiceItem ) {
    return (
        <div>
            <img src={image} alt="" />
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    )
}