// import { authorizationApi } from 'redux/API/api';
// import { changeToken } from 'redux/actions/actions';
// import { useDispatch } from 'react-redux';
import { UserIcon, EnvelopeIcon } from 'images/svg/svgs';
import {
  User,
  LogOutButton,
  Profile,
  Menu,
  Toggle,
  Options,
} from './UserMenu.styled';

export const UserMenu = ({ token, user }) => {
  // const [logOut] = authorizationApi.useLogOutMutation();
  // const dispatch = useDispatch();
  const { name, email } = user;
  return (
    <User>
      <Menu>
        <Toggle>
          <UserIcon />
          {name}
        </Toggle>
        <Options align={{ md: 'start' }}>
          <Menu.Item as={'div'}>
            <Profile>
              <EnvelopeIcon />
              {email}
            </Profile>
          </Menu.Item>
          <Menu.Item as={'div'}>
            <LogOutButton
              type="button"
              variant="danger"
              onClick={() => {
                // logOut(token);
                // dispatch(changeToken({}));
              }}
            >
              Log out
            </LogOutButton>
          </Menu.Item>
        </Options>
      </Menu>
    </User>
  );
};
