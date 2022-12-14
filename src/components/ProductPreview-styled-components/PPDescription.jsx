import styled from "styled-components";

const Desc = styled.div`
    margin: 20px 30px;
    grid-area: content;

    p {
        font-size: 0.9rem;
        line-height: 1.6;
    }

    h1 {
        line-height: 1;
        color: hsl(212, 21%, 14%);
    }
`;

const Type = styled.p`
    font-size: 0.7rem !important;
    letter-spacing: 0.5rem;
`;


function PPDescription(props) {
    return (
        <Desc>
            <Type>{props.type}</Type>
            <h1>{props.title}</h1>
            <p>{props.desc}</p>
        </Desc>
    );
}

export default PPDescription;