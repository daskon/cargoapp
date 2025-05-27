import { Nav } from '../components/Nav/Nav'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
        <div><Nav/></div>
        <div><Outlet/></div>
    </div>
  )
}

export default Layout