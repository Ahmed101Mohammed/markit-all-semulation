const DropdownList = ({listOfitems, cNi , cN,setClassName,value, setVal})=>{
    return(
        <div className={cN} onMouseEnter={()=>setClassName(value)} onMouseLeave={()=>setClassName(['drop-list currency-p','drop-list lng-p'])}>
            
            {listOfitems.map((v,i)=>{return(
                <span className="drop-items" key={i}>
                    <img className={cNi} src={v[1]}/>
                    <a href="#" onClick={()=>setVal(v)}>{v[0]} </a>
                </span>
            )})}
           
        </div>
    )
}


export default DropdownList;