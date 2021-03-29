import { useRef, useEffect } from "react";
import { useStore } from "react-redux";
const castArray = (data: any[] = []) => (Array.isArray(data) ? data : [data]);
/**
 * Subscribes to redux store events
 */
export function useAction(
  effect: any,
  type: any,
  deps: any[] = [],
  successive: boolean = true
) {
  const currentValue = useRef(null);
  const store = useStore();

  const handleChange = () => {
    const state = store.getState();
    const action = state.actionListenerState.action;

    let previousValue = currentValue.current;
    currentValue.current = action.type;

    let shouldProcess = successive || previousValue !== action.type;
    if (shouldProcess && castArray(type).includes(action.type)) {
      effect(action);
    }
  };

  useEffect(() => {
    const unsubscribe = store.subscribe(handleChange);
    return () => unsubscribe();
  }, deps);
}
