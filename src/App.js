import logo from "./logo.svg";
import "./App.css";
import CardList from "./components/card-list";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const FetchData = async () => {
    setLoading(true);
    try {
      // const response = await fetch(
      //   "https://krds-assignment.github.io/aoc/api-assets/data.json"
      // );
      // console.log(response, "response");
      axios
        .get("https://krds-assignment.github.io/aoc/api-assets/data.json")
        .then((response) => {
          console.log(response, "response");
          setData(response?.data);
          setLoading(false);
          // Code for handling the response
        })
        .catch((error) => {
          setLoading(false);
          // Code for handling the error
        });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    FetchData();
  }, []);
  return (
    <div className="main-container">
      {loading ? "Loading..." : <CardList data={data} />}
    </div>
  );
}

export default App;
