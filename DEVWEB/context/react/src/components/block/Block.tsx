import styled from "styled-components"

const Sld = styled.div`
    display: flex;
    flex-direction: column ;
    background-color: white;
    border-radius: 10px;
    border-style: dotted;
    width: 300px;
    padding: 0px 10px;
    margin: 0px 8px;
`;

export default function Block({children}:any){
    return (
        <Sld>
            {children}
        </Sld>
    );
}