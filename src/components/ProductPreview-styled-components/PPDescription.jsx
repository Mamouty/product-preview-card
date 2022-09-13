import styled from "styled-components";

const Desc = styled.div`

    grid-area: content;
`;


function PPDescription(props) {
    return (
        <Desc>
            <p>{props.type}</p>
            <h1>{props.title}</h1>
            <p>{props.desc}</p>
        </Desc>
    );
}

export default PPDescription;