import Video from './../video/video';
import Input from './../input/input';
import Arrivals from './../arrivals/Arrivals';
import Promo3 from './../promo/Promo3';
import Block from './../Block/Block';
import Bloger from './bloger';
import MapComponent from './../googlemap/googlemap';
import Whyme from './../Whyme/Whyme';
const Blog = () => {
    return (
        <div>
		<Promo3/>
        <Bloger/>
    
        <Input/>
        <Block/>
        
        </div>
	);
}

export default Blog;