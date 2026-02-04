import { Drum } from 'lucide-react'
import { useEffect, useState } from 'react'
import SideNav from '../components/SideNav'
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';



function UpdateProductPage() {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState(0);
  const [productImage, setProductImage] = useState("");
  const [productDesc, setProductDesc] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const params = useParams();

  const notify = () => toast.success('Product Successfully Updated');

    // extraction of function
    const navigate = useNavigate();


  // create product
  const updateProductHandler = (e) => {
    // stop form submitting
    e.preventDefault();
    setIsLoading(true);

    axios.put(`https://69803a5a6570ee87d50e72e0.mockapi.io/products/${params.id}`, {
      name: productName,
      price: productPrice,
      image: productImage,
      description: productDesc
    }).then((res) => {
      console.log(res.data);
      notify();
      navigate("/products");

    }).catch((err) => {
      console.log(err)

    }).finally(() => {
      console.log("done");
      setIsLoading(false);
    })


  }




  useEffect( () => {
    
    axios.get(`https://69803a5a6570ee87d50e72e0.mockapi.io/products/${params.id}`)
      .then( (res) => {
        console.log(res.data);
        setProductName(res.data.name);
        setProductPrice(res.data.price);
        setProductImage(res.data.image);
        setProductDesc(res.data.description);
      })


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
        <div className='p-5'>
          <h2 className='my-4'>Update a Product</h2>
          <form className='w-50' onSubmit={updateProductHandler}>
            <div className="mb-3">
              <label htmlFor="productName" className="form-label">
                Product Name
              </label>
              <input
                type="text"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                className="form-control"
                id="productName"
                placeholder="New Product Name"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="productPrice" className="form-label">
                Product Price
              </label>
              <input
                type="number"
                value={productPrice}
                onChange={(e) => setProductPrice(e.target.value)}
                className="form-control"
                id="productPrice"
                placeholder="New Product Price"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="productImage" className="form-label">
                Product Image
              </label>
              <input
                type="text"
                value={productImage}
                onChange={(e) => setProductImage(e.target.value)}
                className="form-control"
                id="productImage"
                placeholder="New Product Image"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="productDescription" className="form-label">
                Product Description
              </label>
              <textarea
                className="form-control"
                id="productDescription"
                value={productDesc}
                onChange={(e) => setProductDesc(e.target.value)}
                rows={3}
                defaultValue={""}
              />
            </div>
            <div className="mb-3">

              <button className="btn btn-primary" type="submit" disabled={ (isLoading == true) ? true: false }>
                {
                  (isLoading == true) ? (<><span className="spinner-border spinner-border-sm me-2" aria-hidden="true"></span>
                <span role="status">Loading...</span></>) : "Update Product"
                }
              </button>

            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default UpdateProductPage