import React from 'react';
import { Redirect } from 'react-router-dom';
import { AiFillGithub } from 'react-icons/all';
import { useAuthContext } from '../AuthContextProvider';
import config from '../../../config';
import GitHubLoginButton from './github-login-button/GitHubLoginButton';

const Login = () => {
  const { state, dispatch } = useAuthContext();
  const [loading, setLoading] = React.useState(false);

  const { githubOAuth: { awsLambdaUri, api, scope } } = config;

  const onSuccess = (token) => {
    setLoading(false);
    dispatch({
      type: 'LOGIN',
      payload: {
        token,
        user: undefined,
      },
    });
  };

  const onFailure = () => {
    setLoading(false);
  };

  if (state.user) {
    return <Redirect to="/" />;
  }

  return (
    <GitHubLoginButton
      api={api}
      githubOauthUri={awsLambdaUri}
      disabled={loading}
      scope={scope}
      onRequest={() => setLoading(true)}
      onSuccess={onSuccess}
      onFailure={onFailure}
    >
      <>
        <AiFillGithub />
        <span>Se connecter avec Github</span>
      </>
    </GitHubLoginButton>
  );
};

export default Login;
