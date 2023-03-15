import { useState } from "react";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [selectedPage, setSelectedPage] = useState("Home");
  const [payList, setPayList] = useState([]);

  const addItemToPayList = (item) => {
    const newItem = { ...item, id: uuidv4() };
    setPayList([...payList, newItem]);
  };

  const removeItemFromPayList = (itemId) => {
    if (confirm("Voce Realmente deseja remover esse transacao?")) {
      const newPayList = payList.filter((item) => item.id !== itemId);
      setPayList(newPayList);
    }
  };

  const pages = {
    Home: <Home selectPage={setSelectedPage} />,
    Dashboard: (
      <Dashboard
        Dashboard
        payList={payList}
        addItemToPayList={addItemToPayList}
        removeItemFromPayList={removeItemFromPayList}
        selectPage={setSelectedPage}
      />
    ),
  };

  function Router({ selectedPage }) {
    return pages[selectedPage];
  }

  return (
    <div className="App">
      <Router selectedPage={selectedPage} />
    </div>
  );
}

export default App;
