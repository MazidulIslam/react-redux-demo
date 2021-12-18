import "./App.css";
import CakeContainer from "./components/CakeContainer";
import { Provider } from "react-redux";
import store from "./redux/store";
import HooksCakeContainer from "./components/HooksCakeContainer";
import IceCreamContainer from "./components/IceCreamContainer";
import ChocolateContainer from "./components/ChocolateContainer";
import HooksChocolateContainer from "./components/HooksChocolateContainer";
import NewCakeContainer from "./components/NewCakeContainer";
import ItemContainer from "./components/ItemContainer";
import UserContainer from "./components/UserContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <UserContainer />
        <h1>End of User List</h1>
        <ItemContainer cake />
        <ItemContainer />
        <CakeContainer />
        <HooksCakeContainer />
        <IceCreamContainer />
        <ChocolateContainer />
        <HooksChocolateContainer />
        <br />
        <NewCakeContainer />
      </div>
    </Provider>
  );
}

export default App;
