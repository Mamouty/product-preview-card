import styled from "styled-components";
import PPDescription from "./PPDescription";
import products from "../../products";
import PPBuy from "./PPBuy";

const Card = styled.div`
        height: 450px;
        width: 600px;
        background-color: white;
        border-radius: 10px;
        overflow: hidden;
        display: grid;
        grid-template-columns: 50% 50%;
        grid-template-areas: "image content";

        img {
            width: 300px;
            grid-area: image;
        }
`;

function PPCard() {

    return(
        <Card>
            <img src={products.imageSrc} alt={products.imageAlt}/>
            <PPDescription type={products.type} title={products.title} desc={products.description} />
            <PPBuy newPrice={products.newPrice} oldPrice={products.oldPrice} />
        </Card>
    );
}

export default PPCard;