import styled from 'styled-components';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';

export const Header = styled(Navbar)`
  display: block;
  padding-bottom: 0 !important;
`;

export const NavStyled = styled(Nav)`
  width: 100%;
  border-bottom: none;
  .nav-link {
    /* border-bottom: 1px solid #dee2e6; */
  }

  .active {
    border-bottom: none;
  }
`;

export const ErrorBox = styled.div`
  background-color: black;
`;

export const Output = styled.div`
  box-sizing: border-box;
  border: 1px solid #dee2e6;
  border-top: none;
  border-bottom-left-radius: 0.375rem;
  border-bottom-right-radius: 0.375rem;

  padding: 20px;
`;

export const Path = styled(LinkContainer)``;

export const Item = styled(NavStyled.Item)`
  display: flex;
  flex: 1;
  /* & .nav-link.active {
    background-color: rgb(13, 110, 253);
    color: rgb(13, 110, 253);
  } */
`;

export const Link = styled(NavStyled.Link)`
  display: flex !important;
  align-items: center;
  justify-content: center;
  min-height: 70px;
`;

export const BadgeStyled = styled.div`
  background-color: rgba(13, 110, 253);
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  padding: 10px;
  &:hover {
    background-color: #0a58ca;
  }
`;

export const Title = styled.h3`
  margin: 0;
  line-height: 1;
  color: white;
`;
