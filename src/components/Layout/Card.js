import '../../styles/Card.scss'

const Card = (props) => {
    return (
        <section className="card">

        {props.children}
        </section>
    )
}

export default Card;