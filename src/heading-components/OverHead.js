import './OverHead.css'
import LoginARegester from './LoginARegester';
import Dropdown from './Dropdown';
import DropdownList from './DropdownList';
import us from '../photos/united-states.png'
import eg from '../photos/egypt.png'
import {useState} from 'react'
const OverHead = ({currency,lng,setCurrency,setlng})=>{
    const [className,setClassName] = useState(['drop-list currency-p','drop-list lng-p'])

    return(
        <div className="sitting">
            <div className='sitting-container'>
                <span className='hosting'>
                    <span className='skew'>

                    </span>
                    <span className='hotline'>
                        Hotline: +3 (465) 137-8763
                    </span>
                </span>
                <div className='main'>
                    <LoginARegester/>
                    
                    <Dropdown text = {currency} setClassName={setClassName} value={['drop-list currency-p hover-drop-list','drop-list lng-p']}/>
                    <DropdownList listOfitems={[['€ Euro'],['£ Pound Sterling'],['$ US DOLLAR']]} cN={className[0]} setClassName={setClassName} value={['drop-list currency-p hover-drop-list','drop-list lng-p']} setVal={setCurrency}/>
                    <Dropdown text = {lng[0]} img = {lng[1]} cNt = 'lang' cN = 'img' setClassName={setClassName} value={['drop-list currency-p','drop-list lng-p hover-drop-list']}/>
                    <DropdownList listOfitems={[['ENGLISH', us],['ARABIC',eg]]} cNi = 'img' cN={className[1]} setClassName={setClassName} value={['drop-list currency-p','drop-list lng-p hover-drop-list']} setVal={setlng}/>
                </div>
            </div>
        </div>
    )
}

export default OverHead;