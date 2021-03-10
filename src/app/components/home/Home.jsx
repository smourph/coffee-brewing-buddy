import { Redirect } from 'react-router-dom';
import { useAuthContext } from '../AuthContextProvider';

const Home = () => {
  const { state, dispatch } = useAuthContext();

  if (!state.user) {
    return <Redirect to="/login" />;
  }

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  return (
    <div className="container home">
      <p>Web app for tracking coffee brewing</p>
      <button type="button" onClick={() => handleLogout()}>Logout</button>
      <div>
        <div className="content">
          <img src={state.user.avatar_url} alt="Avatar" />
          <span>{state.user.name}</span>
        </div>
      </div>
    </div>
  );
};

export default Home;
