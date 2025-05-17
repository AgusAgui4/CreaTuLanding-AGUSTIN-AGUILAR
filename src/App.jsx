import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <>
      <NavBar/>
      <ItemListContainer greetings="¡Bienvenido a TECshop!" />
    </>
  );
}

export default App;
