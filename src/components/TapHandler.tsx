import { useEffect } from "react";
import { Pressable, PressableProps, GestureResponderEvent } from "react-native";

type TapHandlerProps = PressableProps & {
  delay?: number;
  onSingleTap?: () => void;
  onDoubleTap?: () => void;
}

export function TapHandler({ delay = 300, onPress, onSingleTap, onDoubleTap, ...props }: TapHandlerProps) {
  const { onTap, clearTimer } = useOnTap();

  function useOnTap() {
    let lastTap = 0;
    let counterTap = 0;
    let timer: NodeJS.Timer | null = null;

    function clearTimer() {
      timer && clearTimeout(timer);
    }

    function onTap(event: GestureResponderEvent) {
      const now = Date.now();
      const timeDelta = now - lastTap;
      counterTap++;

      if (counterTap === 1) {
        timer = setTimeout(() => {
          onSingleTap && onSingleTap();
          counterTap = 0;
          timer = null;
        }, delay);

        lastTap = now;
      } else if (counterTap === 2) {
        if (timeDelta < delay) {
          clearTimer();
          onDoubleTap && onDoubleTap();
          counterTap = 0;
        }
      }

      onPress && onPress(event);
    }

    return { onTap, clearTimer };
  }

  useEffect(() => {
    return () => {
      clearTimer();
    }
  }, []);

  return <Pressable {...props} onPress={onTap} />;
}