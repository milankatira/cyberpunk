import "./App.css";
import CollectionCard from "./components/CollectionCard";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import axios from "axios";
import PunkList from "./components/PunkList";
import Main from "./components/Main";

function App() {
  const [punkListData, setPunkListData] = useState([]);
  const [selectedPunk, setSelectedPunk] = useState(0);
  console.log(punkListData);
  useEffect(() => {
    const getMyNfts = async () => {
      const openseaData = await axios
        .get(
          "https://testnets-api.opensea.io/assets?asset_contract_address=0x159F9b2173d0078C31e972Dc91C3d333aA8C2B95&order_direction=asc"
        )
        .then((res) => {
          // console.log(res);
          setPunkListData(res.data.assets);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getMyNfts();
  }, []);
  return (
    <div className="app">
      <Header />
      <Main punkListData={punkListData} selectedPunk={selectedPunk}/>
      <PunkList punkListData={punkListData} setSelectedPunk={setSelectedPunk} />
    </div>
  );
}

export default App;
