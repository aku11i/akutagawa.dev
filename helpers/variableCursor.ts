import { gsap, Power2 } from "gsap";

export const DEFAULT_STICK_CLASS = "__variable_cursor_stick";
export const DEFAULT_EXPAND_CLASS = "__variable_cursor_expand";

export type VariableCursorOptions = {
  pointerSize?: number;
  pointerColor?: string;
  pointerOpacity?: number;
  stickSelector?: string;
  stickDuration?: number;
  unstickDuration?: number;
  moveDuration?: number;
  expandSelector?: string;
  expandScale?: number;
};

export type VariableCursorResult = {
  element: HTMLElement;
  mount: (to?: HTMLElement) => void;
  unmount: () => void;
};

export function variableCursor(
  element: VariableCursorResult["element"] = document.createElement("div"),
  {
    pointerSize = 30,
    pointerColor = "gray",
    pointerOpacity = 0.4,
    stickSelector = `.${DEFAULT_STICK_CLASS}`,
    stickDuration = 0.15,
    unstickDuration = 0.1,
    moveDuration = 0.1,
    expandSelector = `.${DEFAULT_EXPAND_CLASS}`,
    expandScale = 2,
  }: VariableCursorOptions = {}
): VariableCursorResult {
  let isSticking = false;

  element.style.position = "absolute";
  element.style.transform = "translate(-50%, -50%)";
  element.style.zIndex = "99999";
  element.style.pointerEvents = "none";

  gsap.set(element, {
    backgroundColor: pointerColor,
    opacity: pointerOpacity,
    borderRadius: "50%",
    width: pointerSize,
    height: pointerSize,
  });

  const stick = (target: HTMLElement) => {
    isSticking = true;

    const { offsetTop, offsetLeft, offsetHeight, offsetWidth } = target;

    gsap.to(element, {
      top: offsetTop + offsetHeight / 2,
      left: offsetLeft + offsetWidth / 2,
      width: offsetWidth,
      height: offsetHeight,
      borderRadius: `${Math.min(offsetHeight, offsetWidth) * 0.1}px`,
      duration: stickDuration,
      ease: Power2.easeInOut,
      overwrite: true,
    });
  };

  const unstick = () => {
    isSticking = false;

    gsap.to(element, {
      width: pointerSize,
      height: pointerSize,
      borderRadius: "50%",
      duration: unstickDuration,
      ease: Power2.easeOut,
      overwrite: true,
    });
  };

  const expand = () => {
    gsap.to(element, {
      scale: expandScale,
      duration: unstickDuration,
      ease: Power2.easeOut,
      overwrite: true,
    });
  };

  const unexpand = () => {
    gsap.to(element, {
      scale: 1,
      duration: unstickDuration,
      ease: Power2.easeOut,
      overwrite: true,
    });
  };

  window.document.querySelectorAll(expandSelector).forEach((_) => {
    const el = _ as HTMLElement;

    const handleMouseEnter = () => {
      expand();
    };
    el.addEventListener("mouseenter", handleMouseEnter);

    const handleMouseLeave = () => {
      unexpand();
    };
    el.addEventListener("mouseleave", handleMouseLeave);
  });

  window.document.querySelectorAll(stickSelector).forEach((_) => {
    const el = _ as HTMLElement;

    const handleMouseEnter = () => {
      stick(el);
    };
    el.addEventListener("mouseenter", handleMouseEnter);

    const handleMouseLeave = () => {
      unstick();
    };
    el.addEventListener("mouseleave", handleMouseLeave);
  });

  const handleMouseMove = (event: MouseEvent) => {
    const { pageY, pageX } = event;
    if (isSticking) return;

    gsap.to(element, {
      top: pageY,
      left: pageX,
      duration: moveDuration,
    });
  };

  const mount: VariableCursorResult["mount"] = (to = document.body) => {
    window.addEventListener("mousemove", handleMouseMove);
    to.appendChild(element);
  };

  const unmount: VariableCursorResult["unmount"] = () => {
    window.removeEventListener("mousemove", handleMouseMove);
    element.remove();
  };

  return { element, mount, unmount };
}
