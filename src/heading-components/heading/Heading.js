import './Headin.css'
import Logo from './Logo'
import NavItem from './NavItems'
import Heart from './HeartIcon'
import Shopingcart from './Shopingcart'
import Categories from './Categories'

const Heading = () =>{

    return(
        <div className="head-p">
            <div className="head-container">
                <div className='website-logo'>
                    <Logo />
                </div>
                
                <div className='others'>
                    <Heart/>
                    <Shopingcart/>
                    <Categories/>
                </div>
                <nav>
                    <NavItem title="HOME"/>
                    <NavItem title="COLLECTIONS"/>
                    <NavItem title="SHOP"/>
                    <NavItem title="BLOG"/>
                    <NavItem title="PAGES"/>
                    <NavItem title="MARKETPLACE"/>
                </nav>

            </div>
        </div>
    )
    
}

export default Heading;