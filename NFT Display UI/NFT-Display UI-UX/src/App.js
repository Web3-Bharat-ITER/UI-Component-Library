import './App.css';
import Header from './components/Header'
// import CollectionCard from './components/CollectionCard'
import PunkList from './components/PunkList'
import {useState, useEffect} from 'react' 
import axios from 'axios'
import Main from './components/Main'
function App() {

      const [punkListData, setPunkListData]= useState([])
      const [selectedPunk,  setSelectedPunk]= useState(0)

      useEffect(()=>{
        const getMYNfts = async () => {
          const openseaData = await axios.get(
            'https://testnets-api.opensea.io/assets?asset_contract_address=0x146233E8AAc5DA9CCD1E57c5B76C8FB05D57A441&order_direction=asc'
            )
            console.log(openseaData.data.assets)
            setPunkListData(openseaData.data.assets)
        }

        return getMYNfts()
      },[])
  return (
  <div className='app'>
    <Header />
    {
      punkListData.length > 0 && ( 
      <>
          <Main punkListData={punkListData} selectedPunk={selectedPunk}/>
          <PunkList
           punkListData={punkListData}
           setSelectedPunk={setSelectedPunk} />
      </>
    )
    }
    </div>
  )
}

export default App;
