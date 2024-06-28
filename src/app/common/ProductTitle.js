
const ProductTitle = (props) => {
    return (
        <section className='row product-title'>
            <div className='col-lg-12 bg-dark-subtle d-flex gap-2' style={{ height: "9vh" }}>
                <div className='left-stick'></div>
                <div className='title1'>today's</div>
            </div>
            <div className='col-lg-3 bg-dark-subtle' style={{ height: "9vh" }}>
                <div className='title2'>Flash sales</div>
            </div>
            <div className='col-lg-6 bg-dark-subtle' style={{ height: "9vh" }}>
                {props.children}
            </div>
            <div className='col-lg-3 bg-dark-subtle d-flex justify-content-end' style={{ height: "9vh" }}>
                pp
            </div>
        </section>
    )
}

export default ProductTitle
