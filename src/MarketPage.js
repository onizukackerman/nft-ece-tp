import './MarketPage.css';

function MarketPage() {

    
  
    return (
        <div className='main-market'>
        <h1>market</h1>
        <div id='conteneur'>
            <div id="element1" className="element" >
                <div className='photo'></div>
                <div className='titre'> article 1 </div>
                <div className='prix'>1</div>
                <button ClassName='achat'> Acheter</button>
            </div>
            <div id="element2" className="element">
                <div className='photo'></div>
                <div className='titre'> article 1 </div>
                <div className='prix'>1</div>
                <button ClassName='achat'> Acheter</button>
            </div>
            <div id="element3" className="element">
                <div className='photo'></div>
                <div className='titre'> article 1 </div>
                <div className='prix'>1</div>
                <button ClassName='achat'> Acheter</button>
            </div>
        </div>
      </div>
    )
  }
  
  export default MarketPage;