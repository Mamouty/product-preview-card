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
    grid-template-rows: 60% auto;
    grid-template-areas:
      "image content"
      "image price"
    ;

    picture img {
        width: 300px;
    }

    @media (max-width: 700px) {
      width: 360px;
      height: 670px;
      grid-template-columns: 100%;
      grid-template-rows: 250px 250px 1fr;
      grid-template-areas:
        "image"
        "content"
        "price"
      ;

      picture img {
        width: 360px;
      }

    }
`;

function PPCard() {

    return(
        <Card>
            <picture>
                <source srcset={products.imageDeskSrc} media="(min-width: 700px)" />
                <source srcset={products.imageMobSrc} media="(max-width: 700px)" />
                <img src={products.imageDeskSrc} alt={products.imageAlt} />
            </picture>
            <PPDescription type={products.type} title={products.title} desc={products.description} />
            <PPBuy newPrice={products.newPrice} oldPrice={products.oldPrice} />
        </Card>
    );
}

export default PPCard;