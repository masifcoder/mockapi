

import {Gauge, Store, LayersPlus, ShoppingBag} from "lucide-react";
import { Link } from "react-router-dom";

function SideNav() {
    return (
        <ul className='list-unstyled'>
            <li className='mb-3'><Link to='/' className='text-black text-decoration-none'><Gauge className='me-2' /> Dashboard</Link></li>
            <li className='mb-3'><Link to='/products' className='text-black text-decoration-none'><Store className='me-2' /> Products</Link></li>
            <li className='mb-3'><Link to='/create' className='text-black text-decoration-none'><LayersPlus className='me-2' /> Create Product</Link></li>
            <li className='mb-3'><Link to='/orders' className='text-black text-decoration-none'><ShoppingBag className='me-2' /> Orders</Link></li>
        </ul>
    )
}

export default SideNav