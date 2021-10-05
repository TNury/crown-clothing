// REACT
import React from 'react';

export class ErrorBoundary extends React.Component {

  state = {
    isThereError: false,
  }

  static getDerivedStateFromError() {

    return {
      isThereError: true
    }
  }

  componentDidCatch(error) {

    console.log(error);

  }

  render() {

    return (
      this.state.isThereError 
      ?
      <h1>Something went wrong!</h1>
      :
      this.props.children
    )
  }
};