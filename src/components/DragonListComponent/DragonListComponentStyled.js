import styled from 'styled-components';
import Carousel from 'react-bootstrap/Carousel';
import Table from 'react-bootstrap/Table';

export const Element = styled.li`
  padding: 20px;
  border: 1px solid #fafafa;
  border-radius: 10px;
`;

export const Slider = styled(Carousel)`
  .carousel-caption p {
    background-color: #00000099;
    margin-bottom: 0;
    padding: 5px;
  }
  .carousel-indicators button {
    border: 1px solid #00000011;
  }
  .carousel-control-next-icon,
  .carousel-control-prev-icon {
    background-color: #00000033;
  }
  max-width: 900px;
  max-height: 700px;
  margin: auto;
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
`;
