const Dropdown = ({img,text,cN,setClassName,value,cNt})=>{
    return(
        <span className="dropdown" onMouseEnter={()=>setClassName(value)} onMouseLeave={()=>setClassName(['drop-list currency-p','drop-list lng-p'])}>
            <span className="img-height"><img className={cN} src={img} /></span>
            <a href="#" className={cNt} >{text}</a>
        </span>
    )
}

export default Dropdown;