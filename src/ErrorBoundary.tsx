import { Component, PropsWithChildren } from "react";

export class ErrorBoundary extends Component<
  PropsWithChildren<{ fallback: React.ReactElement }>,
  { hasError: boolean }
> {
  constructor(props: { fallback: React.ReactElement }) {
    super(props);

    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return {
      hasError: true,
    };
  }

  componentDidCatch(error: Error) {
    console.error(error);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }

    return this.props.children;
  }
}
