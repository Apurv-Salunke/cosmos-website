"use client";

import {
  CSSProperties,
  ReactNode,
  useEffect,
  useRef,
  useState,
  useMemo,
  memo,
  forwardRef,
} from "react";

import { cn } from "@/lib/utils";

interface NeonColorsProps {
  firstColor: string;
  secondColor: string;
}

interface NeonGradientCardProps {
  /**
   * @default <div />
   * @type ReactElement
   * @description
   * The component to be rendered as the card
   * */
  as?: React.ElementType;
  /**
   * @default ""
   * @type string
   * @description
   * The className of the card
   */
  className?: string;

  /**
   * @default ""
   * @type ReactNode
   * @description
   * The children of the card
   * */
  children?: ReactNode;

  /**
   * @default 5
   * @type number
   * @description
   * The size of the border in pixels
   * */
  borderSize?: number;

  /**
   * @default 20
   * @type number
   * @description
   * The size of the radius in pixels
   * */
  borderRadius?: number;

  /**
   * @default "{ firstColor: '#ff00aa', secondColor: '#00FFF1' }"
   * @type string
   * @description
   * The colors of the neon gradient
   * */
  neonColors?: NeonColorsProps;

  [key: string]: any;
}

const areEqual = (prev: NeonGradientCardProps, next: NeonGradientCardProps) => {
  return (
    prev.as === next.as &&
    prev.className === next.className &&
    prev.borderSize === next.borderSize &&
    prev.borderRadius === next.borderRadius &&
    prev.neonColors?.firstColor === next.neonColors?.firstColor &&
    prev.neonColors?.secondColor === next.neonColors?.secondColor &&
    prev.children === next.children
  );
};

export const NeonGradientCard = memo(forwardRef<HTMLDivElement, NeonGradientCardProps>(
  function NeonGradientCardFn({
    as: Component = "div",
    className,
    children,
    borderSize = 2,
    borderRadius = 20,
    neonColors = {
      firstColor: "#ff00aa",
      secondColor: "#00FFF1",
    },
    ...props
  }, ref) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    useEffect(() => {
      if (!containerRef.current) return;
      const updateDimensions = () => {
        if (containerRef.current) {
          const width = containerRef.current.offsetWidth;
          const height = containerRef.current.offsetHeight;
          setDimensions(prev =>
            prev.width !== width || prev.height !== height
              ? { width, height }
              : prev
          );
        }
      };
      updateDimensions();
      const resizeObserver = new window.ResizeObserver(updateDimensions);
      resizeObserver.observe(containerRef.current);
      return () => {
        resizeObserver.disconnect();
      };
    }, []);

    const style = useMemo(() => ({
      "--border-size": `${borderSize}px`,
      "--border-radius": `${borderRadius}px`,
      "--neon-first-color": neonColors.firstColor,
      "--neon-second-color": neonColors.secondColor,
      "--card-width": `${dimensions.width}px`,
      "--card-height": `${dimensions.height}px`,
      "--card-content-radius": `${borderRadius - borderSize}px`,
      "--pseudo-element-width": `${dimensions.width + borderSize * 2}px`,
      "--pseudo-element-height": `${dimensions.height + borderSize * 2}px`,
      "--after-blur": `${dimensions.width / 3}px`,
    }) as CSSProperties, [borderSize, borderRadius, neonColors.firstColor, neonColors.secondColor, dimensions.width, dimensions.height]);

    const innerClassName = useMemo(() => cn(
      "relative size-full min-h-[inherit] rounded-[var(--card-content-radius)] bg-gray-100 p-6",
      "before:absolute before:-left-[var(--border-size)] before:-top-[var(--border-size)] before:-z-10 before:block",
      "before:h-[var(--pseudo-element-height)] before:w-[var(--pseudo-element-width)] before:rounded-[var(--border-radius)] before:content-['']",
      "before:bg-[linear-gradient(0deg,var(--neon-first-color),var(--neon-second-color))] before:bg-[length:100%_200%]",
      "before:animate-background-position-spin",
      "before:transition-[background] before:duration-1000 before:ease-in-out",
      "after:absolute after:-left-[var(--border-size)] after:-top-[var(--border-size)] after:-z-10 after:block",
      "after:h-[var(--pseudo-element-height)] after:w-[var(--pseudo-element-width)] after:rounded-[var(--border-radius)] after:blur-[var(--after-blur)] after:content-['']",
      "after:bg-[linear-gradient(0deg,var(--neon-first-color),var(--neon-second-color))] after:bg-[length:100%_200%] after:opacity-80",
      "after:animate-background-position-spin",
      "after:transition-[background] after:duration-1000 after:ease-in-out",
      "dark:bg-neutral-900",
    // eslint-disable-next-line react-hooks/exhaustive-deps
    ), [dimensions.width, dimensions.height, borderSize, borderRadius, neonColors.firstColor, neonColors.secondColor]);

    return (
      <Component
        ref={ref}
        style={style}
        className={cn(
          "relative z-10 size-full rounded-[var(--border-radius)]",
          className,
        )}
        {...props}
      >
        <div ref={containerRef} className={innerClassName}>
          {children}
        </div>
      </Component>
    );
  }), areEqual);

NeonGradientCard.displayName = "NeonGradientCard";
