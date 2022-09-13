import styled from "styled-components"; 

const Buy = styled.div`

    grid-area: content;

`;

function PPBuy(props) {
    return (
        <Buy>
            <h1>{props.newPrice}</h1>
            <p>{props.oldPrice}</p>
            <button>
                <img src={process.env.PUBLIC_URL + "../../../public/images/icon"} alt="Chart icon"/>
                Add to Cart
            </button>
        </Buy>
    );
}

export default PPBuy;