import styled from 'styled-components';

const Button = styled.button`
    
    border: none;
    border-radius: 4px;
    padding: 10px 20px;
    text-align: center;
    cursor: pointer;
    transition-property: all;
    transition-delay: .1s;
    transition-duration: .2s;

    &:hover {opacity: 0.8}

    @media(max-width: 800px){
        width: 250px;
        display: block;
        margin: auto;
    }
`;

export const ButtonNew = styled(Button)`

    background-color: orange;

`;

export const ButtonAdd = styled(Button)`
    background-color: green;
`;



