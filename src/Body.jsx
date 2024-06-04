import './Body.css';
export default function Body(){
    return(
        <main>
            <div className="content">
                <h1>FOREVER FASTER</h1>
                <p>As comfortable as running gets</p>
                <div className='shopNow-Category'>
                    <button>Shop Now</button>
                    <button>Category</button>
                </div>
                <div className='ecomm'>
                    <p>also available on</p>
                    <img src="/images/flipkart.png"  className='flipkart' alt="" />
                    <img src="/images/amazon.jpg" alt="" />
                </div>
            </div>
            <div className="image">
                <img src="/images/shoe.jpg" alt="" />
            </div>
        </main>
    );

}