/**
 * Custom version of {@link "node_modules/react-github-login/src/GitHubLogin.js"} to avoid
 * "SyntaxError: Support for the experimental syntax 'classProperties'
 * isn't currently enabled (8:20)"
 */

import PropTypes from 'prop-types';
import { toQuery } from 'react-github-login/src/utils';
import PopupWindow from 'react-github-login/src/PopupWindow';

const GitHubLogin = ({
  buttonText, children, className, clientId, onRequest, onSuccess, onFailure, redirectUri, scope,
}) => {
  const handleRequest = () => {
    onRequest();
  };

  const handleFailure = (error) => {
    onFailure(error);
  };

  const handleSuccess = (data) => {
    if (!data.code) {
      handleFailure(new Error('\'code\' not found'));
    }

    onSuccess(data);
  };

  const onBtnClick = () => {
    const search = toQuery({
      client_id: clientId,
      scope,
      redirect_uri: redirectUri,
    });

    handleRequest();
    PopupWindow.open(
      'github-oauth-authorize',
      `https://github.com/login/oauth/authorize?${search}`,
      { height: 1000, width: 600 },
    ).then(
      (data) => handleSuccess(data),
      (error) => handleFailure(error),
    );
  };

  const attrs = { onClick: onBtnClick };
  if (className) {
    attrs.className = className;
  }

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <button type="button" {...attrs}>{children || buttonText}</button>
  );
};

GitHubLogin.propTypes = {
  buttonText: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  className: PropTypes.string,
  clientId: PropTypes.string.isRequired,
  onRequest: PropTypes.func,
  onSuccess: PropTypes.func,
  onFailure: PropTypes.func,
  redirectUri: PropTypes.string.isRequired,
  scope: PropTypes.string,
};

GitHubLogin.defaultProps = {
  buttonText: 'Sign in with GitHub',
  children: undefined,
  className: undefined,
  scope: 'user:email',
  onRequest: () => {
  },
  onSuccess: () => {
  },
  onFailure: () => {
  },
};

export default GitHubLogin;
