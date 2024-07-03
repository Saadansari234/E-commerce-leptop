const ProductTitle = (props) => {
    return (
        <section className='product-title'>
            <div className='  d-flex gap-2' >
                <div className='left-stick'></div>
                <div className='title1'>{props.title}</div>
            </div>
            <div className="title-2-sec">
                <div  >
                    <div className='title2'>{props.subtitle}</div>
                </div>
                <div className="timer-button-sec ">
                    {
                        props.children
                    }
               
                </div>
                
            </div>
        </section>
    )
}

export default ProductTitle
