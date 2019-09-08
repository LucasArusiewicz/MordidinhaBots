import React from 'react';

import { Container } from './styles';

export default function Header(props) {
  return (
    <Container>
      <div>{props.left}</div>
      <div>{props.right}</div>
    </Container>
  );
}
