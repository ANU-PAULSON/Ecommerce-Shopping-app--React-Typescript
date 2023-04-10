import React from "react";

const variantClasses = {
  h1: "font-bold sm:text-5xl md:text-5xl text-[64px]",
  h2: "font-bold sm:text-5xl md:text-5xl text-[62px]",
  h3: "font-bold text-5xl sm:text-[38px] md:text-[44px]",
  h4: "font-bold sm:text-[35px] md:text-[37px] text-[39px]",
  h5: "font-bold sm:text-[27px] md:text-[29px] text-[31px]",
  h6: "font-bold text-2xl md:text-[22px] sm:text-xl",
  body1: "text-base",
  body2: "text-sm",
} as const;

export type TextProps = Partial<{
  className: string;
  variant: keyof typeof variantClasses;
  as: React.ElementType;
}> &
  React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >;

const Text: React.FC<React.PropsWithChildren<TextProps>> = ({
  children,
  className,
  variant,
  as,
  ...restProps
}) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variant && variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
