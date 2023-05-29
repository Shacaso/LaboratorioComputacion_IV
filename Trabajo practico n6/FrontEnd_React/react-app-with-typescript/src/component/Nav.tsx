import { Icon } from '@iconify/react';

function Nav() {

  return (
    <div className="Nav">
      <div className="h-screen w-full bg-white relative flex overflow-hidden">
        <aside className="h-full w-16 flex flex-col space-y-10 items-center justify-center relative bg-gray-800 text-white">
          <button onClick={event => window.location.href = 'http://localhost:3000/index'} className="focus:text-gray-800 h-10 w-10 flex items-center justify-center rounded-lg cursor-pointer hover:text-gray-800 hover:bg-white  hover:duration-300 hover:ease-linear focus:bg-white"><Icon className='h-6 w-6' icon="akar-icons:home-alt1" /></button>
          <button onClick={event => window.location.href = 'http://localhost:3000/maps'} className="focus:text-gray-800 h-10 w-10 flex items-center justify-center rounded-lg cursor-pointer hover:text-gray-800 hover:bg-white  hover:duration-300 hover:ease-linear focus:bg-white"><Icon className='h-6 w-6' icon="solar:map-point-bold" /></button>
          <button onClick={event => window.location.href = 'http://localhost:3000/productos'} className="focus:text-gray-800 h-10 w-10 flex items-center justify-center rounded-lg cursor-pointer hover:text-gray-800 hover:bg-white  hover:duration-300 hover:ease-linear focus:bg-white"><Icon className='h-6 w-6' icon="streamline:shopping-bag-hand-bag-2-shopping-bag-purse-goods-item-products" /></button>
          <button onClick={event => window.location.href = 'http://localhost:3000/crud'} className="focus:text-gray-800 h-10 w-10 flex items-center justify-center rounded-lg cursor-pointer hover:text-gray-800 hover:bg-white  hover:duration-300 hover:ease-linear focus:bg-white">CRUD</button>
        </aside>
    </div >
    </div>
  );
}

export default Nav;
