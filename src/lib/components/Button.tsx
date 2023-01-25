/* eslint-disable react/display-name */
import Link from "next/link";
import {
  ComponentPropsWithoutRef,
  ElementType,
  ForwardedRef,
  forwardRef,
  LegacyRef,
  PropsWithChildren,
  ReactNode,
} from "react";

const Button = forwardRef(
  (
    {
      onClick,
      href,
      children,
    }: { children: ReactNode } & ComponentPropsWithoutRef<"a">,
    ref: LegacyRef<HTMLAnchorElement>
  ) => {
    return (
      <a
        href={href}
        onClick={onClick}
        ref={ref}
        className="p-6 bg-brown border-2 border-beige-white uppercase text-small text-beige-white rounded-10 shadow-hard"
      >
        {children}
      </a>
    );
  }
);

export default Button;
