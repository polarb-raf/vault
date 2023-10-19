export const debounce = <T>(callback: (arg: T) => void, delay: number) => {
  let timer: number;
  return (arg: T) => {
    clearTimeout(timer);
    timer = window.setTimeout(() => callback(arg), delay);
  };
};
