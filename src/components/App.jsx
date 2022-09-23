import { Routes, Route, Navigate } from 'react-router-dom';
import Container from './Container/Container';
import { Navigation } from './Navigation/Navigation';
import { Home } from 'pages/Home/Home';
import { SignUpForm } from './SignUpForm/SignUpForm';
import { LogInForm } from './LogInForm/LogInForm';
import { Contacts } from 'pages/Contacts/Contacts';

const token = true;
const user = {
  name: 'random',
  email: 'random.org',
};

export const App = () => {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Navigation token={token} user={user} />}>
          <Route index element={<Home />} />
          <Route
            path="/register"
            element={
              !token ? <SignUpForm /> : <Navigate to="/contacts" replace />
            }
          />
          <Route
            path="/login"
            element={
              !token ? <LogInForm /> : <Navigate to="/contacts" replace />
            }
          />
          <Route
            path="/contacts"
            element={
              token ? (
                <Contacts token={token} />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </Container>
  );
};
