import React from 'react';
import { Container } from './style';
import Logo from '../Logo';
import NewVideoButton from '../Button';

const Navbar = () => {
    return (
        <Container>
            <Logo/>
            <NewVideoButton/>
        </Container>
    );
};

export default Navbar;
