import styled from "styled-components";

const Sld = styled.div`
    width: 100%;
    cursor: pointer;
    margin: 5px 0px;
    padding: 5px 0px;

    &:hover {
        color: orange;
    }
`;

export default function Item({ children }: any) {
    return (
        <Sld>
            {children}
        </Sld>
    );
}