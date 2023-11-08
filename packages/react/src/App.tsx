import { Button } from '@vault/design-system';

import LoadingIndicator from '@/components/LoadingIndicator';

function App() {
  return (
    <div className="mx-auto w-[120px]">
      <LoadingIndicator />
      <div className="bg-blue-500">hohoho</div>
      <div className="bg-primary">heheiehoi</div>
      <Button className="mb-5">이것은 수류탄이오</Button>
      <Button primary disabled>
        이것은 못쓰는 버튼이오
      </Button>
    </div>
  );
}

export default App;
