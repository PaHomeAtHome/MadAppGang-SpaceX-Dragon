import { Routes, Route, Navigate } from 'react-router-dom';
import Container from './Container/Container';
import { Navigation } from './Navigation/Navigation';
import { Home } from 'pages/Home/Home';
import { SignUpForm } from './SignUpForm/SignUpForm';
import { LogInForm } from './LogInForm/LogInForm';
import { Dragons } from 'pages/Dragons/Dragons';
import DragonDetails from 'pages/DragonDetails/DragonDetails';

const token = true;
const user = {
  name: 'randomsadsaddas asdsaddasasd ',
  email: 'random.org',
};

export const App = () => {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Navigation token={token} user={user} />}>
          <Route index element={<Home />} />
          <Route path="details/:dragonId" element={<DragonDetails />} />
          <Route
            path="/register"
            element={
              !token ? <SignUpForm /> : <Navigate to="/dragons" replace />
            }
          />
          <Route
            path="/login"
            element={
              !token ? <LogInForm /> : <Navigate to="/dragons" replace />
            }
          />
          <Route
            path="/profile"
            element={token ? <Dragons /> : <Navigate to="/login" replace />}
          />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </Container>
  );
};
