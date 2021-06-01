import { StyledCard, StyledInfo } from "./index.styled";

const Card = (props) => {
    const { product, description, type, image } = props.p

    return(
        <StyledCard>
            <img src={image} alt={product} />
            <StyledInfo>
                <h3>{product}</h3>
                <h4>{type}</h4>
                <p>{description}</p>
            </StyledInfo>
        </StyledCard>
    )
}

export default Card;