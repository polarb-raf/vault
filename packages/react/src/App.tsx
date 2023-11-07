import { Button } from '@vault/design-system';

import LoadingIndicator from '@/components/LoadingIndicator';

function App() {
  return (
    <div className="mx-auto w-[120px]">
      <LoadingIndicator />
      <div className="bg-blue-500">hohoho</div>
      <div className="bg-primary">heheiehoi</div>
      <Button className="mb-5" />
      <Button primary disabled />
    </div>
  );
}

export default App;
