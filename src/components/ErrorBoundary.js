import React, { Component } from 'react';

export default class ErrorBoundary extends Component {
	constructor(props) {
		super(props);
		this.state = { error: null, errorInfo: null };
	}

	static getDerivedStateFromError(error) {
		return { error: error };
	}

	componentDidCatch(error, errorInfo) {
		this.setState({
			error: error,
			errorInfo: errorInfo,
		});
	}

	render() {
		if (this.state.error) {
			return this.props.FallbackComponent;
		}

		return this.props.children;
	}
}
