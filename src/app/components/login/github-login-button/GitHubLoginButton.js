import PropTypes from 'prop-types';
import { toQueryString } from '../../../utils/queryStringParameters';
import PopupWindow from './PopupWindow';

const GitHubLoginButton = ({
  api,
  buttonText,
  children,
  className,
  disabled,
  githubOauthUri,
  onRequest,
  onSuccess,
  onFailure,
  scope,
}) => {
  const handleRequest = () => {
    onRequest();
  };

  const handleFailure = (error) => {
    onFailure(error);
  };

  const handleSuccess = (data) => {
    if (!data.access_token) {
      handleFailure(new Error('\'access_token\' not found'));
    }
    onSuccess(data);
  };

  const onButtonClick = () => {
    const queryParams = { api };
    if (scope) {
      queryParams.scope = scope;
    }

    handleRequest();
    PopupWindow.open(
      'github-oauth-login',
      `${githubOauthUri}?${toQueryString(queryParams)}`,
      { height: 800, width: 600 },
    )
      .then((data) => handleSuccess(data))
      .catch((error) => handleFailure(error));
  };

  const attrs = { onClick: onButtonClick };
  if (className) {
    attrs.className = className;
  }

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <button type="button" disabled={disabled} {...attrs}>{children || buttonText}</button>
  );
};

GitHubLoginButton.propTypes = {
  api: PropTypes.string.isRequired,
  buttonText: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  className: PropTypes.string,
  disabled: PropTypes.bool,
  githubOauthUri: PropTypes.string.isRequired,
  onRequest: PropTypes.func,
  onSuccess: PropTypes.func.isRequired,
  onFailure: PropTypes.func.isRequired,
  scope: PropTypes.string,
};

GitHubLoginButton.defaultProps = {
  buttonText: 'Sign in with GitHub',
  children: undefined,
  disabled: false,
  className: undefined,
  scope: undefined,
  onRequest: () => {
  },
};

export default GitHubLoginButton;
