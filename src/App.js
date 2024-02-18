import React from 'react';
import client from '../apolloClient';
import { ApolloProvider } from '@apollo/client';
import Home from './pages/Home';
import './App.css';
import Main from './pages/MainPage';
import { useState } from 'react';




class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}

const App = () => {
  const [showHome, setShowHome] = useState(false);

  const handleEnterClick = () => {
    setShowHome(true); 
  };

  return (
    <ErrorBoundary>
      <ApolloProvider client={client}>
        {showHome ? (
          <Home />
        ) : (
          <Main onEnterClick={handleEnterClick} />
        )}
      </ApolloProvider>
    </ErrorBoundary>
  );
};

export default App;