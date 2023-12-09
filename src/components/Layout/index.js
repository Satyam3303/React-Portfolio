import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar';
import './index.scss';

const Layout = () => {
  return(
   <div className="App">
    <div class="animated" style={{animationDelay:'3s'}}></div>
    <div class="animated" style={{animationDelay:'4s'}}></div>
    <div class="animated" style={{animationDelay:'5s'}}></div>
    <div class="animated" style={{animationDelay:'6s'}}></div>

    <div class="animated2" style={{animationDelay:'3s'}}></div>
    <div class="animated2" style={{animationDelay:'4s'}}></div>
    <div class="animated2" style={{animationDelay:'5s'}}></div>
    <div class="animated2" style={{animationDelay:'6s'}}></div>
  <Sidebar />
  <div className='page'>
    <span className='tags top-tags'>&lt;body&gt;</span>

    <Outlet/>
    
    <span className='tags bottom-tags'>
    &lt;/body&gt;
    <br/>
    <span className='bottom-tag-html'>&lt;/html&gt;</span>
    </span>
  </div>
  </div>
  )
}

export default Layout