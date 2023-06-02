import { useState } from 'react';
import style from './Nav.module.css'
import logo from '../../assets/icons/logo_alt.svg';
// import Search from './Search';
import GemBox from '../../pages/GemBox/GemBox';

export const Nav = () => {
  const [searchScreen, setSearchScreen] = useState(false);
  const [gemScreen, setGemScreen] = useState(false);

  const toggleSearchScreen = () => {
    setSearchScreen(!searchScreen)
  }

  const toggleGemScreen = () => {
    setGemScreen(!gemScreen)
  }

  return (
    <>
    <nav>
      <div className="container">
        <div className={style.nav_group}>
          <a href="/" >
            <img src={logo} alt="logo" className={style.logo}/>
          </a>
            
          <div className={style.nav_icons}>
            <div className={style.search} onClick={toggleSearchScreen}>  
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlSpace="preserve"
                width="1em"
                height="1em"
                style={{
                  enableBackground: "new 0 0 513.749 513.749",
                }}
                viewBox="0 0 513.749 513.749"
              >
                <path d="m504.352 459.061-99.435-99.477c74.402-99.427 54.115-240.344-45.312-314.746S119.261-9.277 44.859 90.15-9.256 330.494 90.171 404.896c79.868 59.766 189.565 59.766 269.434 0l99.477 99.477c12.501 12.501 32.769 12.501 45.269 0 12.501-12.501 12.501-32.769 0-45.269l.001-.043zm-278.635-73.365c-88.366 0-160-71.634-160-160s71.634-160 160-160 160 71.634 160 160c-.094 88.326-71.673 159.906-160 160z" />
              </svg>
            </div>

            <div className={style.gem} onClick={toggleGemScreen}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="512"
                height="512"
                data-name="Layer 1"
                viewBox="0 0 24 24"
              >
                <path d="M20.437 4.08L14.665.748a5.345 5.345 0 00-5.33 0L3.563 4.08A5.344 5.344 0 00.9 8.7v6.664a5.346 5.346 0 002.665 4.616l5.772 3.332a5.344 5.344 0 005.33 0l5.772-3.332a5.346 5.346 0 002.661-4.621V8.7a5.344 5.344 0 00-2.663-4.62zm-9.6-.734a2.338 2.338 0 012.33 0L18.6 6.484l-5.183 2.994a2.85 2.85 0 01-2.834 0L5.4 6.484zM5.063 17.377A2.338 2.338 0 013.9 15.359V9.082l5.185 2.993a5.752 5.752 0 001.417.584v7.857zm13.874 0L13.5 20.516v-7.857a5.752 5.752 0 001.417-.584L20.1 9.082v6.277a2.338 2.338 0 01-1.163 2.018z"></path>
              </svg>
            </div>

            {/* <div className='navIcon filter'>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                data-name="Layer 1"
                viewBox="0 0 24 24"
              >
                <path d="M14.5 24a1.488 1.488 0 0 1-.771-.214l-5-3A1.5 1.5 0 0 1 8 19.5v-5.165l-5.966-7.3A4.2 4.2 0 0 1 1 4.253 4.258 4.258 0 0 1 5.253 0h13.494a4.254 4.254 0 0 1 3.179 7.079L16 14.382V22.5a1.5 1.5 0 0 1-1.5 1.5zM11 18.65l2 1.2v-6a1.5 1.5 0 0 1 .335-.946l6.305-7.767a1.309 1.309 0 0 0 .36-.884A1.255 1.255 0 0 0 18.747 3H5.253a1.254 1.254 0 0 0-.937 2.086l6.346 7.765A1.5 1.5 0 0 1 11 13.8z" />
              </svg>
            </div> */}

            {/* <div className='navIcon user'>  
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="512"
                height="512"
                x="0"
                y="0"
                enableBackground="new 0 0 512 512"
                version="1.1"
                viewBox="0 0 512 512"
                xmlSpace="preserve"
              >
                <path d="M244.317 299.051c-90.917 8.218-160.183 85.041-158.976 176.32V480c0 17.673 14.327 32 32 32 17.673 0 32-14.327 32-32v-5.909c-.962-56.045 40.398-103.838 96-110.933 58.693-5.82 110.992 37.042 116.812 95.735.344 3.47.518 6.954.521 10.441V480c0 17.673 14.327 32 32 32 17.673 0 32-14.327 32-32v-10.667c-.104-94.363-76.685-170.774-171.047-170.67a171.4 171.4 0 00-11.31.388zM256.008 256c70.692 0 128-57.308 128-128S326.7 0 256.008 0s-128 57.308-128 128c.07 70.663 57.337 127.929 128 128zm0-192c35.346 0 64 28.654 64 64s-28.654 64-64 64-64-28.654-64-64 28.654-64 64-64z"></path>
              </svg>
            </div> */}
          </div>
        </div>
      </div>
    </nav>
    {/* {searchScreen && <Search isShowing={toggleSearchScreen}/>} */}
    {gemScreen && <GemBox isShowing={toggleGemScreen}/>}
    
    </>
  )
}
