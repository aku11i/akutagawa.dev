import { css } from "@emotion/react";
import { useEffect, useRef, VoidFunctionComponent } from "react";

import { Mq } from "../../styles/mediaQuery";

const POINTER_SIZE = 10;

export const Pointer: VoidFunctionComponent = () => {
  const ref = useRef<HTMLDivElement>(null);

  const setPosition = (top: number, left: number) => {
    const pointer = ref.current;
    if (!pointer) return;
    pointer.style.top = `${top}px`;
    pointer.style.left = `${left}px`;
  };

  useEffect(() => {
    const pointer = ref.current;
    if (!pointer) return;

    const handleMouseMove = (event: MouseEvent) => {
      const { pageX, pageY } = event;
      setPosition(pageY, pageX);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
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
    opacity: 0.5;
    pointer-events: none;
    position: absolute;
    top: ${-POINTER_SIZE}px;
    transform: translate(-50%, -50%);
    width: ${POINTER_SIZE}px;
    z-index: 1001;
  `,
  Mq.dark(css`
    background-color: white;
  `),
];
