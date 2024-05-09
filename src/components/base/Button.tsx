/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { HTMLAttributes, PropsWithChildren } from "react";
import { colors } from "../../styles/colors";

const buttonVariants = {
  primary: css`
    background-color: ${colors.primary};
    color: white;
  `,
  transparent: css`
    background-color: transparent;
    color: ${colors.primary};
  `,
};

const buttonSizes = {
  medium: css`
    padding: 0.5rem 1rem;
    width: 5rem;
    height: 2rem;
  `,
  stretch: css`
    width: 100%;
    height: 100%;
    padding: 1rem;
    display: inline-block;
  `,
};

interface ButtonProps
  extends PropsWithChildren<HTMLAttributes<HTMLButtonElement>> {
  variant?: keyof typeof buttonVariants;
  size?: keyof typeof buttonSizes;
}

export default function Button({
  children,
  size = "medium",
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <button
      css={css`
        ${buttonVariants[variant]}
        ${buttonSizes[size]}
        border : none;
        border-radius: 0.25rem;
        cursor: pointer;
        &:hover {
          opacity: 0.8;
        }
      `}
      {...props}
    >
      {children}
    </button>
  );
}
