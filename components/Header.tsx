import Link from "next/link";
import {useTheme} from 'next-themes'
import {MoonIcon, SunIcon} from '@heroicons/react/solid'

function Header() {

  let {systemTheme, theme, setTheme} = useTheme()
  let renderThemeChanger =() =>{
  let currentTheme = theme === 'system' ? systemTheme : theme;
  if (currentTheme === 'dark'){
    return (
      <SunIcon className="w-7 h-7" role="button" onClick={() => setTheme
      ('light')} />
    )
  }
  else{
    return (
      <MoonIcon className="w-7 h-7" role="button" onClick={() => setTheme
      ('dark')} />
    )
  }
}

  return <header className="flex justify-between p-5 max-w-7xl mx-auto">
      <div className="flex items-center space-x-5">
          <Link href="/">
            <img className='w-44 object-contain cursor-pointer' src="/Dark.png"/> 
          </Link>
          <div className="hidden md:inline-flex items-center space-x-5">
              <h3>About</h3>
              <h3>Contact</h3>
              <h3 className="text-white bg-green-600 px-4 py-1 rounded-full">Follow</h3>
          </div>      
      </div>
      <div className="flex items-center space-x-5 px-4">
          <div>{renderThemeChanger()}</div>
          <h3 className="text-green-600">Sing In</h3>
      </div>

  </header>;
}

export default Header;

