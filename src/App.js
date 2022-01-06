import OverHead from './heading-components/OverHead.js'
import {useState} from 'react'
import us from './photos/united-states.png'
function App() {
  const [currency,setCurrency] = useState('$ US DOLLAR')
  const [lng,setlng] = useState(['ENGLISH',us])

  
  return (
    <div className='parent'>
      <OverHead currency={currency} lng = {lng} setCurrency={setCurrency} setlng={setlng}/>
      
    </div>
  );
}

export default App;
