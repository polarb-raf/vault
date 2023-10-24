import { useState, useEffect, Dispatch, SetStateAction } from 'react';

interface ModalOpenStateHookParams {
  parentElId: string; // modal을 담고 있는 부모 요소의 element Id. unique해야 오동작을 방지할 수 있음.
  defaultState?: boolean;
}

const useModalOpenState = ({ parentElId, defaultState = false }: ModalOpenStateHookParams): [boolean, Dispatch<SetStateAction<boolean>>] => {
  const [isOpened, setOpenedState] = useState<boolean>(defaultState);
  useEffect(() => {
    const checkClickOutside = (e: MouseEvent) => {
      const target = e.target as Element;
      if (target.closest(`#${parentElId}`)) return;
      setOpenedState(false);
    };
    document.addEventListener('mousedown', checkClickOutside);
    return () => {
      document.removeEventListener('mousedown', checkClickOutside);
    };
  }, [setOpenedState, parentElId]);

  return [isOpened, setOpenedState];
};

export default useModalOpenState;
