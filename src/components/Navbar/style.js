import styled from 'styled-components';

export const Container = styled.nav`
    display: flex;
    justify-content: space-between;
    background-color: #000;
    padding: 10px 20px;

    @media(max-width: 800px){
        flex-direction: column;
        position: relative;
    }
`;
