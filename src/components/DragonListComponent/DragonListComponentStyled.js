import styled from 'styled-components';
import Carousel from 'react-bootstrap/Carousel';
import Table from 'react-bootstrap/Table';
import { NavLink } from 'react-router-dom';

export const Element = styled.div`
  border: 1px solid #fafafa;
  border-radius: 10px;
  background-color: #fbfbfb;
  padding: 20px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  height: 100%;
`;

export const Slider = styled(Carousel)`
  background-color: #000000cc;
  width: 100%;
  margin: 10px auto !important;

  @media screen and (min-width: 700px) {
    padding: 20px;
  }

  .carousel-caption p {
    background-color: #00000099;
    margin-bottom: 0;
    padding: 5px;
  }
  .carousel-indicators button {
    margin-bottom: -5px;
    border: 1px solid #00000011;
  }
  .carousel-control-next-icon,
  .carousel-control-prev-icon {
    background-color: #00000033;
  }
  max-width: 900px;
  max-height: 700px;
  margin: auto;

  img {
    height: 300px;
    object-fit: contain;
  }
`;

export const TableLink = styled.a`
  text-decoration: none;
  cursor: pointer;
`;

export const TableEl = styled(Table)`
  td {
    word-wrap: break-word;
    overflow-wrap: anywhere;
  }

  margin: 0 !important;
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  width: fit-content;
  display: flex;
  margin: auto;
  margin-top: 20px;
`;
