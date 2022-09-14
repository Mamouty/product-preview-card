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
        
    }

    p {
        font-size: 0.8rem;
        text-decoration: line-through;
        margin-left: 20px;
    }

    button {
        height: 50px;
        width: 100%;
        border-radius: 10px;
        border: none;
        cursor: pointer;
        font-size: 0.9rem;
        font-weight: 700;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
            width: 15px;
            margin-right: 10px;
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