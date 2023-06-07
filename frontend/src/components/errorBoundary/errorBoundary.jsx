import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);

        // keep track of error
        this.state = { hasError: false, errorMessage: '' };
    }

    // update component state when error is encountered
    static getDerivedStateFromError(error) {
        return { hasError: true, errorMessage: error.message };
    }

    // log error when error is caught
    componentDidCatch(error, errorInfo) {
        console.log("There's been an error caught by ErrorBoundary")
        console.error(error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return <div>
                <h1>Oops! Something went wrong: {this.state.errorMessage}</h1>
            </div>
        }

        return this.props.children;
    }
};

export default ErrorBoundary;