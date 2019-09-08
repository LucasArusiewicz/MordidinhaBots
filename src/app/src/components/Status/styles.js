import styled from "styled-components";
import { IoIosArrowDown } from "react-icons/io";

export const Container = styled.div`
  position: relative;
`;

export const Content = styled.div`
  opacity: ${({ isOpen }) => isOpen ? 1 : 0};
  pointer-events: ${({ isOpen }) => isOpen ? 'all' : 'none'};
  visibility: ${({ isOpen }) => isOpen ? 'visible' : 'hidden'};
  transform: scale(${({ isOpen }) => isOpen ? 1 : .9}) translateY(${({ isOpen }) => isOpen ? 0 : '-10px'});
  background: #FFF;
  width: 180px;
  transition: opacity .125s,transform .125s,visibility .125s,-webkit-transform .125s;
  transform-origin: 50% 0;
  box-shadow: 0 1px 3px rgba(0,0,0,.1);
  position: absolute;
  border-radius: 4px;
  top: 30px;
  right: 0;
  padding: 2px 0px;

  label {
    display: inherit;
    padding: 5px 10px;
    color: #737f8d;

    & :hover {
      color: #9099a4;
      }
    }
  }
`;

export const ContainerText = styled.span`
  padding: 4px 2px;
  align-items: center;
  transition: .125s;
  color: #737f8d;

  &:hover {
    color: #FFF;
  }
`;

export const Arrow = styled(IoIosArrowDown)`
  margin-left: 5px;
  font-size: 10px;
  transform: ${({ isOpen }) => isOpen ? 'none' : 'rotate(90deg)'};
  transition: .125s;
`;
