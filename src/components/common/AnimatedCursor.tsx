import { useRef, useEffect, useState, useCallback } from "react";

type Handler = (event: MouseEvent) => void;

function useEventListener(
  eventName:
    | "mousemove"
    | "mousedown"
    | "mouseup"
    | "mouseenter"
    | "mouseleave",
  handler: Handler,
  element = document
) {
  const savedHandler = useRef<Handler>();

  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    const isSupported = element && element.addEventListener.bind(element);
    if (!isSupported) return;

    function eventListener(event: MouseEvent) {
      savedHandler.current?.(event);
    }

    element.addEventListener(eventName, eventListener);

    return () => {
      element.removeEventListener(eventName, eventListener);
    };
  }, [eventName, element]);
}

/**
 * Animated Cursor
 * Replaces the native cursor with a custom animated cursor.
 *
 * @author Stephen Scaff
 */
interface AnimatedCursorProps {
  color?: string;
  outerAlpha?: number;
  innerSize?: number;
  outerSize?: number;
  outerScale?: number;
  innerScale?: number;
}

function AnimatedCursor({
  color = "255, 64, 64",
  outerAlpha = 0.4,
  innerSize = 8,
  outerSize = 8,
  outerScale = 4,
  innerScale = 0.8,
}: AnimatedCursorProps) {
  const cursorOuterRef = useRef<HTMLDivElement>(null);
  const cursorInnerRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number>();
  const previousTimeRef = useRef<number | undefined>();
  const [coords, setCoords] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const [isVisible, setIsVisible] = useState(true);
  const [isActive, setIsActive] = useState(false);
  const [isActiveClickable, setIsActiveClickable] = useState(false);
  const endX = useRef(0);
  const endY = useRef(0);

  const onMouseMove = useCallback(
    ({ clientX, clientY }: { clientX: any; clientY: any }) => {
      const X = clientX as number;
      const Y = clientY as number;

      setCoords({ x: X, y: Y });
      if (cursorInnerRef.current) {
        cursorInnerRef.current.style.top = `${Y}px`;
        cursorInnerRef.current.style.left = `${X}px`;
      }
      endX.current = X;
      endY.current = Y;
    },
    []
  );

  const animateOuterCursor = useCallback(
    (time: number) => {
      if (previousTimeRef.current !== undefined) {
        coords.x += (endX.current - coords.x) / 8;
        coords.y += (endY.current - coords.y) / 8;
        if (cursorOuterRef.current) {
          cursorOuterRef.current.style.top = `${coords.y}px`;
          cursorOuterRef.current.style.left = `${coords.x}px`;
        }
      }
      previousTimeRef.current = time;
      requestRef.current = requestAnimationFrame(animateOuterCursor);
    },
    [requestRef]
  );

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animateOuterCursor);
    return () => {
      cancelAnimationFrame(requestRef.current!);
    };
  }, [animateOuterCursor]);

  const onMouseDown = useCallback(() => setIsActive(true), []);
  const onMouseUp = useCallback(() => setIsActive(false), []);
  const onMouseEnter = useCallback(() => setIsVisible(true), []);
  const onMouseLeave = useCallback(() => setIsVisible(false), []);

  useEventListener("mousemove", onMouseMove, document);
  useEventListener("mousedown", onMouseDown, document);
  useEventListener("mouseup", onMouseUp, document);
  useEventListener("mouseenter", onMouseEnter, document);
  useEventListener("mouseleave", onMouseLeave, document);

  useEffect(() => {
    if (isActive && cursorInnerRef.current) {
      cursorInnerRef.current.style.transform = `scale(${innerScale})`;
      cursorOuterRef.current!.style.transform = `scale(${outerScale})`;
    } else {
      cursorInnerRef.current!.style.transform = "scale(1)";
      cursorOuterRef.current!.style.transform = "scale(1)";
    }
  }, [innerScale, outerScale, isActive]);

  useEffect(() => {
    if (isActiveClickable && cursorInnerRef.current && cursorOuterRef.current) {
      cursorInnerRef.current.style.transform = `scale(${innerScale * 1.3})`;
      cursorOuterRef.current.style.transform = `scale(${outerScale * 1.4})`;
    }
  }, [innerScale, outerScale, isActiveClickable]);

  useEffect(() => {
    if (isVisible) {
      cursorInnerRef.current!.style.opacity = "1";
      cursorOuterRef.current!.style.opacity = "1";
    } else {
      cursorInnerRef.current!.style.opacity = "0";
      cursorOuterRef.current!.style.opacity = "0";
    }
  }, [isVisible]);

  useEffect(() => {
    const clickables = document.querySelectorAll(
      'a, input[type="submit"], input[type="image"], label[for], select, button, .link, .pointer'
    );

    Array.from(clickables).forEach((el) => {
      if (el instanceof HTMLElement) {
        el.style.cursor = "none";

        el.addEventListener("mouseover", () => {
          setIsActive(true);
        });
        el.addEventListener("click", () => {
          setIsActive(true);
          setIsActiveClickable(false);
        });
        el.addEventListener("mousedown", () => {
          setIsActiveClickable(true);
        });
        el.addEventListener("mouseup", () => {
          setIsActive(true);
        });
        el.addEventListener("mouseout", () => {
          setIsActive(false);
          setIsActiveClickable(false);
        });
      }
    });

    return () => {
      clickables.forEach((el) => {
        el.removeEventListener("mouseover", () => {
          setIsActive(true);
        });
        el.removeEventListener("click", () => {
          setIsActive(true);
          setIsActiveClickable(false);
        });
        el.removeEventListener("mousedown", () => {
          setIsActiveClickable(true);
        });
        el.removeEventListener("mouseup", () => {
          setIsActive(true);
        });
        el.removeEventListener("mouseout", () => {
          setIsActive(false);
          setIsActiveClickable(false);
        });
      });
    };
  }, [isActive]);

  return (
    <>
      <div
        ref={cursorOuterRef}
        style={{
          position: "fixed",
          borderRadius: "50%",
          pointerEvents: "none",
          width: outerSize,
          height: outerSize,
          backgroundColor: `rgba(${color}, ${outerAlpha})`,
          transition: "opacity 0.15s ease-in-out, transform 0.15s ease-in-out",
          zIndex: 999,
        }}
      />
      <div
        ref={cursorInnerRef}
        style={{
          position: "fixed",
          borderRadius: "50%",
          width: innerSize,
          height: innerSize,
          pointerEvents: "none",
          backgroundColor: `rgba(${color}, 1)`,
          transition: "opacity 0.15s ease-in-out, transform 0.25s ease-in-out",
          zIndex: 999,
        }}
      />
    </>
  );
}

export default AnimatedCursor;
