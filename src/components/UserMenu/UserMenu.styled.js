import styled from 'styled-components';
import { Button } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';

export const User = styled.div``;

export const LogOutButton = styled(Button)`
  width: 100%;
`;

export const Profile = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Menu = styled(Dropdown)`
  .btn {
    display: flex !important;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    white-space: normal;
    word-wrap: break-word;
    overflow-wrap: anywhere;
    width: 100%;
  }
`;

export const Toggle = styled(Menu.Toggle)`
  &[aria-expanded='true'] {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    box-shadow: none;
  }
`;

export const Options = styled(Menu.Menu)`
  text-align: center;
`;
