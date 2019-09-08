import React, { Component } from 'react';
import api from "../../services/api";
import { Container, ContainerText, Content, Arrow } from './styles';

export default class Status extends Component {

  state = {
    isOpen: false,
    status: {
      channels: 0,
      guilds: 0,
      users: 0
    }
  }

  onHoverIn = async () => {
    let status = await api.get("bot/status");
    this.setState({ isOpen: true, status: status.data });
  }

  onHoverOut = () => {
    this.setState({ isOpen: false });
  }

  render() {
    const { isOpen, status } = this.state;
    return (
      <Container>
        <ContainerText
          onMouseOver={this.onHoverIn}
          onMouseLeave={this.onHoverOut}
        >
          <label>Status</label>
          <Arrow isOpen={isOpen}/>
        </ContainerText>
        <Content isOpen={isOpen}>
          <label>Total de Servidores: {status.guilds}</label>
          <label>Total de Canais: {status.channels}</label>
          <label>Total de Usuários: {status.users}</label>
        </Content>
      </Container>
    );
  }
}
