import { useEffect, useMemo, useState } from 'react';

import { debounce } from '@/utils/debounce';

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
