import React,{useState, useEffect} from 'react'
import instagramLogo from '../assets/owner/instagram.png'
import twitterLogo from '../assets/owner/twitter.png'
import moreIcon from '../assets/owner/more.png'
import './main.css'

const Main = ({selectedPunk,punkListData}) => {
    const [activePunk, setActivePunk] = useState(punkListData[0])
    useEffect(()=>{
        setActivePunk(punkListData[selectedPunk])
    },[punkListData,selectedPunk])
    return (
        <div className="main">
            <div className="mainContent">
                <div className="punkHighlight">
                    <div className="punkContainer">
                        <img className="selectedPunk"
                         src={activePunk.image_original_url} 
                         alt =""/>
                    </div>
                </div>
                <div className="punkDetails" style={{color: '#fff'}}>
                    <div className="title">{activePunk.name}</div>

                    <span className="itemNumber">.#{activePunk.token_id}</span>
                </div>

                <div className="owner">
                    <div className="ownerImageContainer">
                        <img
                            src="https://ipfs.io/ipfs/QmQAcLywRXMBs1YMumL29z9LEyPK3rJGcKKUAZjpYyKi6d"
                            alt=""
                        />
                    </div>
                    <div className="ownerDetails">
                        <div className="ownerNameAndHAndle">
                            <div className="code">{activePunk.owner.address}</div>
                            <div className="ownerHandle">@prankush1999</div>
                        </div>

                        <div className="ownerLink">
                            
                        <a href="https://www.instagram.com/prankush1999/" id="insta" ><img src={instagramLogo} alt =""/></a>
                        </div>
                        <div className="ownerLink">
                        <a href="https://twitter.com/PrankushGiri" id="insta" ><img src={twitterLogo} alt =""/></a> 
                        </div>
                        <div className="ownerLink">
                        <a href="https://linktr.ee/prankush1999" id="insta" ><img src={moreIcon} alt =""/></a> 
                        </div>


                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Main
