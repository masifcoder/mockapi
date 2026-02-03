import { Drum } from "lucide-react"
import SideNav from "../components/SideNav"

function HomePage() {
  return (
    <>
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
          home page
        </div>
      </div>
    </>
  )
}

export default HomePage