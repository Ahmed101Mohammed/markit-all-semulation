const Shopingcart = ()=>{
    return(
        <div className="shoping-cart">
            <div className="cart">
                <svg
                    xmlns="http://www.w3.org/2000/svg" 
                    width="26"                 
                    height="26" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="#222" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="feather feather-shopping-bag">
                    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z">
                    </path><line x1="3" y1="6" x2="21" y2="6"></line>
                    <path d="M16 10a4 4 0 0 1-8 0"></path>
                </svg>
                <span>
                    0
                </span>
            </div>
            <div className="total-price">
                <span>
                    My cart
                </span>
                <h5>$0.00</h5>
            </div>
            
        </div>
    )
}
export default Shopingcart