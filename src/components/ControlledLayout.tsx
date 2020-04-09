import React, { Fragment, useEffect, useRef } from 'react';
import KeyboardEventsInput from './KeyboardEventsInput';

type ControlledLayoutProps = {
  onSubmit?: React.FormEventHandler;
  onKeyDown: React.KeyboardEventHandler;
  /**If true - than user will be able to control current genre through an up and down keys */
  controlled: boolean;
  children: React.ReactChild;
  autoFocus?: boolean;
};

function ControlledLayout({
  onSubmit = () => {},
  onKeyDown,
  children,
  controlled,
  autoFocus = false,
}: ControlledLayoutProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!controlled) {
      inputRef.current?.blur();
    } else {
      inputRef.current?.focus();
    }
  }, [controlled]);

  const handleBlur = () => {
    if (!inputRef.current) return;
    if (!controlled) return;
    inputRef.current.focus();
  };
  return (
    <Fragment>
      <form onSubmit={onSubmit}>
        <KeyboardEventsInput
          ref={inputRef}
          autoFocus={autoFocus}
          onKeyDown={onKeyDown}
          onBlur={handleBlur}
        />
      </form>
      {children}
    </Fragment>
  );
}

export default ControlledLayout;
