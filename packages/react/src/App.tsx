import { Button } from '@vault/design-system';

import LoadingIndicator from '@/components/LoadingIndicator';

function App() {
  return (
    <div className="mx-auto w-[120px]">
      <LoadingIndicator />
      <Button />
      <div className="bg-blue-500">hohoho</div>
      <div className="bg-primary">heheiehoi</div>
      <Button primary />
    </div>
  );
}

export default App;
