import { Button } from '@vault/design-system';

import LoadingIndicator from '@/components/LoadingIndicator';
import '@vault/design-system/style.css';
import './App.css';

function App() {
  return (
    <div className="mx-auto w-[120px]">
      <LoadingIndicator />
      <Button />
    </div>
  );
}

export default App;
