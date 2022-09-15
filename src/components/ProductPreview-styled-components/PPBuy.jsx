import styled from "styled-components"; 
import cartIcon from "../../icon-cart.svg";

const Buy = styled.div`
    margin: 10px 30px;
    grid-area: price;

    div {
        display: flex;
        align-items: center;
    }

    h1 {
        color: hsl(158, 36%, 37%); 
    }

    p {
        font-size: 0.8rem;
        text-decoration: line-through;
        margin-left: 20px;
    }

    button {
        height: 50px;
        width: 100%;
        background-color: hsl(158, 36%, 37%);
        color: white;
        border-radius: 10px;
        border: none;
        cursor: pointer;
        font-size: 0.9rem;
        font-weight: 700;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: 0.5s;

        img {
            width: 15px;
            margin-right: 10px;
        }

        &:hover {
            background-color: hsl(158, 30%, 17%);
        }
    }

`;

function PPBuy(props) {
    return (
        <Buy>
            <div>
                <h1>{props.newPrice}</h1>
                <p>{props.oldPrice}</p>
            </div>
            <button>
                <img src={cartIcon} alt="Chart icon"/>
                Add to Cart
            </button>
        </Buy>
    );
}

export default PPBuy;