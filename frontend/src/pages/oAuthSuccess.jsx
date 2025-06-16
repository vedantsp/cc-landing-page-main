import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../store/auth';

export const OAuthSuccess = () => {
  const navigate = useNavigate();
  const { storeTokenInLS } = useAuth();

  useEffect(() => {
    // Extract the token from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');

    if (token) {
      storeTokenInLS(token);  // Store the token in local storage
      navigate('/');  // Redirect to the home page after storing the token
    } else {
      console.error('No token found');
    }
  }, [storeTokenInLS, navigate]);

  return (
    <div>
      <h2>Logging in...</h2>
    </div>
  );
};

