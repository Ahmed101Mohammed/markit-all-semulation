import OverHead from './heading-components/overHeading/OverHead'
import {useState} from 'react'
import us from './photos/united-states.png'
import Heading from './heading-components/heading/Heading'

function App() {
  const [currency,setCurrency] = useState('$ US DOLLAR')
  const [lng,setlng] = useState(['ENGLISH',us])

  
  return (
    <div className='parent'>
      <OverHead currency={currency} lng = {lng} setCurrency={setCurrency} setlng={setlng}/>
      <Heading />
      
    </div>
  );
}

export default App;
