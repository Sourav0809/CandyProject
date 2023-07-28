import CandyForm from "./Components/CandyForm/CandyForm";
import Header from "./Components/Header/Header";
import ItemsConatiner from "./Components/ItemsContainer/ItemsContainer";
import ItemProvider from "./Components/Store/ItemContext/ItemProvider";
const App = () => {
  return (
    <ItemProvider>
      <Header />
      <CandyForm />
      <ItemsConatiner />
    </ItemProvider>
  );
};

export default App;
