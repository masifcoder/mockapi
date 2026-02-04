
import { Drum, FilePenLine, Trash } from 'lucide-react'
import SideNav from '../components/SideNav'
import { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';


function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);


  // get all products
  const getAllProducts = () => {
    setIsLoading(true);
    axios.get("https://69803a5a6570ee87d50e72e0.mockapi.io/products")
      .then((response) => {

        setProducts(response.data);

      }).finally(() => setIsLoading(false))

  }

  // delete a product
  const deleteProduct = (id) => {
    setIsLoading(true);

    axios.delete(`https://69803a5a6570ee87d50e72e0.mockapi.io/products/${id}`)
      .then( (response) => {
        console.log(response.data)
      })
      .catch( (err) => {
        console.log(err)
      })
      .finally( () => {
        setIsLoading(false);
        getAllProducts();
      })
  }

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <div className='row'>
      <div className='col-md-2'>
        <div className='logo my-5'>
          <Drum color='red' size={48} /> <span className='fs-4 fw-bold'>Drum-Store</span>
        </div>
        <div>
          <SideNav />
        </div>
      </div>
      <div className='col-md-10'>
        <div className='py-5'>
          <h1 className='my-5'>All Store Products</h1>
           {
              (isLoading == true) ? <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div> : null
            }

          <table className="table table-striped table-bordered">
            <tr>
              <th>ID</th>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>

            {
              products.map((product) => {
                return (
                  <tr key={product.id}>
                    <td>{product.id}</td>
                    <td><img src={product.image} width={40} /></td>
                    <td>{product.name}</td>
                    <td>${product.price}</td>
                    <td>{product.description}</td>
                    <td>
                      <Link to={`/update/${product.id}`}><FilePenLine size={18} className='me-1' /></Link> 
                      <Trash onClick={() => deleteProduct(product.id) }   size={36} color='red' />
                    </td>
                  </tr>
                )
              })
            }
          </table>
        </div>
      </div>
    </div>
  )
}

export default ProductsPage