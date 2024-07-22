import './App.css';
import Header from './components/header/Header';
import { GlobalProvider } from './components/context/Context'
import Transaction from './components/transaction/Transaction';

function App() {
  return (
    <GlobalProvider>
<div className="landing">
<div className="container">
    <Header />
    <Transaction />
</div>    
 </div>
 </GlobalProvider>
  );
}

export default App;
