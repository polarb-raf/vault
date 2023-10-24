import { useEffect, useMemo, useState } from 'react';

import { debounce } from '@/utils/debounce';

// React18 이후 버전을 사용한다면 useDeferredValue를 사용하는 것이 나을 수 있다.
function useDebounce<T>(value: T, delay: number): T {
  const [debouncedState, setState] = useState(value);

  const debouncedSetState = useMemo(() => {
    return debounce(setState, delay);
  }, [delay]);

  useEffect(() => {
    debouncedSetState(value);
  }, [value, debouncedSetState]);

  return debouncedState;
}

export default useDebounce;
