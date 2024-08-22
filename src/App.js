import "./App.css";
import CNAPPDashboard from "./components/CNAPPDashboard";
import MainComponent from "./components/MainComponent";
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { setSearchQuery } from "./features/dashboardSlice";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const searchQuery = useSelector((state) => state.dashboard.searchQuery);

  const handleSearch = (query) => {
    dispatch(setSearchQuery(query));
  };
  return (
    <div className="App">
      <NavBar searchQuery={searchQuery} onSearch={handleSearch} />
      <CNAPPDashboard />
      <MainComponent />
    </div>
  );
}

export default App;
