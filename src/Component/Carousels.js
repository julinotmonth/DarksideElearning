import Carousel from 'react-bootstrap/Carousel';
import poster1 from '../Aset/poster1.jpg'
import poster2 from '../Aset/poster2.jpg'

function Carousels () {
    return (
        <div className='wadah_carousels' style={{marginTop: '59px'}}>
            <Carousel className='wadah_carouselss'>
                <Carousel.Item>
                    <img className='poster1' src={poster1} />
                </Carousel.Item>
                <Carousel.Item>
                    <img className='poster2' src={poster2} />
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default Carousels;
