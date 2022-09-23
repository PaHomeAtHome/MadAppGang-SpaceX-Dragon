import { Routes, Route, Navigate } from 'react-router-dom';
import Container from './Container/Container';
import { Home } from 'pages/Home/Home';

export const App = () => {
  return (
    <Container>
      <Routes>
        <Route index element={<Home />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Container>
  );
};
