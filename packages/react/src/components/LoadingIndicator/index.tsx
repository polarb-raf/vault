const LoadingIndicator = () => {
  return (
    <div className="flex justify-center">
      <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg" version="1.1" width="100" height="40" viewBox="0 0 100 40">
        <circle className="loading-bounce fill-[#2282da]" cx="10" cy="30" r="10" />
        <circle className="loading-bounce fill-[#48a2eb] [animation-delay:0.1s]" cx="50" cy="30" r="10" />
        <circle className="loading-bounce fill-[#6ebaf7] [animation-delay:0.2s]" cx="90" cy="30" r="10" />
      </svg>
    </div>
  );
};
// 사용하는 곳에서 width:height = 10 : 4 비율만 맞춰서 크기 잡아주면 알아서 비율에 맞게 출력된다.
export default LoadingIndicator;
