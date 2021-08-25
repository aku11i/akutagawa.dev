import { css } from "@emotion/react";
import { useEffect, useRef, VoidFunctionComponent } from "react";

import { Mq } from "../../styles/mediaQuery";

const POINTER_SIZE = 40;
const SCALE_FACTOR = 2;

export const STICKY_CLASS = "sticky";

export const Stalker: VoidFunctionComponent = () => {
  const ref = useRef<HTMLDivElement>(null);

  const isStickyRef = useRef(false);

  const setPosition = (top: number, left: number) => {
    const pointer = ref.current;
    if (!pointer) return;
    pointer.style.top = `${top}px`;
    pointer.style.left = `${left}px`;
  };

  const setSize = (width: number, height: number) => {
    const pointer = ref.current;
    if (!pointer) return;
    pointer.style.width = `${width}px`;
    pointer.style.height = `${height}px`;
  };

  const getPosition = (el: HTMLElement) => {
    return {
      top: el.offsetTop,
      left: el.offsetLeft,
    };
  };

  const getSize = (el: HTMLElement) => {
    return {
      width: el.offsetWidth,
      height: el.offsetHeight,
    };
  };

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const pointer = ref.current;
      if (!pointer) return;

      if (isStickyRef.current) return;

      const { pageX, pageY } = event;
      setPosition(pageY, pageX);

      pointer.style.borderRadius = "50%";
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const handleMouseEnter = (event: MouseEvent) => {
      const pointer = ref.current;
      if (!pointer) return;

      const isSticky = (event.target as HTMLElement).classList.contains(
        STICKY_CLASS
      );

      if (isSticky) {
        isStickyRef.current = true;
        const { top, left } = getPosition(event.target as HTMLElement);
        const { width, height } = getSize(event.target as HTMLElement);
        setPosition(top + height / 2, left + width / 2);
        setSize(width, height);

        pointer.style.borderRadius = "8px";
      } else {
        setSize(POINTER_SIZE * SCALE_FACTOR, POINTER_SIZE * SCALE_FACTOR);
      }
    };

    document.querySelectorAll("a").forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
    });

    return () => {
      document.querySelectorAll("a").forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
      });
    };
  }, []);

  useEffect(() => {
    const handleMouseLeave = (event: MouseEvent) => {
      isStickyRef.current = false;

      const pointer = ref.current;
      if (!pointer) return;

      const { pageX, pageY } = event;
      setPosition(pageY, pageX);
      setSize(POINTER_SIZE, POINTER_SIZE);
    };

    document.querySelectorAll("a").forEach((el) => {
      (el as HTMLElement).addEventListener("mouseleave", handleMouseLeave);
    });
    return () => {
      document.querySelectorAll("a").forEach((el) => {
        (el as HTMLElement).removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return <div ref={ref} css={style} />;
};

const style = [
  css`
    background-color: black;
    border-radius: 50%;
    height: ${POINTER_SIZE}px;
    left: ${-POINTER_SIZE}px;
    opacity: 0.2;
    pointer-events: none;
    position: absolute;
    top: ${-POINTER_SIZE}px;
    transform: translate(-50%, -50%);
    transition: top 0.1s ease, left 0.1s ease, border-radius 0.1s ease,
      width 0.1s ease, height 0.1s ease;
    width: ${POINTER_SIZE}px;
    z-index: 1001;
  `,
  Mq.dark(css`
    background-color: white;
  `),
];
