import styled from "styled-components";
import PPCard from "./ProductPreview-styled-components/PPCard";


const Main = styled.main`
    height: 100vh;
    background-color: hsl(30, 38%, 92%);
    display: flex;
    justify-content: center;
    align-items: center;
`;


function PreviewProduct() {
    return (
        <Main>
            <PPCard />
        </Main>
    );
}

export default PreviewProduct;