import React, { type ReactNode } from 'react';

import { CommonError, HTTPError } from '@/utils/error.ts';

type FallbackRenderFunc = ({ message, reset }: { message: string | null; reset: () => void }) => ReactNode | null;

interface ErrorBoundaryState {
  hasError: boolean;
  name: string | null;
  message: string | null;
  status: number | null;
  method: string | null;
}

interface ErrorBoundaryProps {
  fallbackRender?: FallbackRenderFunc | JSX.Element;
  children: ReactNode;
}

const initialState: ErrorBoundaryState = {
  hasError: false,
  name: null,
  message: null,
  status: null,
  method: null,
};

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = initialState;

  resetErrorBoundary = () => {
    this.setState(initialState);
  };

  static getDerivedStateFromError(error: CommonError | HTTPError) {
    const errorObject: ErrorBoundaryState = {
      hasError: true,
      name: error.name,
      message: error.message,
      status: null,
      method: null,
    };
    if (error instanceof HTTPError) {
      errorObject.status = error.status;
      errorObject.method = error.method;
    }
    return errorObject;
  }

  public componentDidCatch(error: CommonError | HTTPError) {
    console.error('Error has occurred. Message: ', error.message);
    // Sentry.captureException(error); sentry 같은 도구를 쓴다면 여기서 로깅을 해주자.
    if (error instanceof HTTPError) {
      window.alert(error.message); // toast를 쓰는 경우는 alert 대신 넣어주자.
    }
  }

  public render() {
    const { children, fallbackRender } = this.props;
    const { hasError, name, status, message } = this.state;

    if (!hasError) return children;
    if (fallbackRender) {
      if (typeof fallbackRender !== 'function') return fallbackRender;
      return fallbackRender({
        message,
        reset: this.resetErrorBoundary,
      });
    }

    return <div>오류가 발생했습니다. 잠시 후 다시 시도해주세요.</div>;
    // TODO: 기본으로 보여줄 NotFound, InternalServerError 페이지 만들기
    // if (name === 'HTTPError') {
    //   return status && status < 500 ? <NotFound /> : <InternalServerError resetError={this.resetErrorBoundary} />;
    // }
  }
}
