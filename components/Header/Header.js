import Image from 'next/image'

const Logo = () => {
  return <Image src="/header-logo.png" alt="Logo" width={195} height={23}/>
}

const Search = () => {
  return <span className="my-auto w-[41.063rem] sm:hidden xs:hidden md:flex h-full relative items-center lg:mr-[2.563rem] sm:mr-[0.5rem] m:mr-[1.5rem]">
    <span className="absolute left-[1.25rem] w-full mt-1">
      <Image src="/search.svg" alt="Logo" width={17.77} height={17.77}/>
    </span>
    <input className="h-full w-full pl-[3.563rem] bg-grey text-xxs text-light-grey placeholder-light-grey rounded-md focus-within:outline-none" placeholder="Lorem ipsum"/>
  </span>
}

const Buttons = () => {
  return <span className="flex lg:space-x-[1.8rem] h-full">
    {
      [...Array(3)].map((i, index) => {
        return <button key={index} className="font-extrabold text-sm cursor-pointer p-[0.625rem] h-full transition-[border] ease-linear duration-200 border-[transparent] border-b-2 border-solid hover:border-hover-btn">
          Lorem
        </button>
      })
    }
  </span>
}

const Gradient = () => {
  return <div className="w-full h-[0.375rem] bg-header-gradient"></div>
}

export default function Header() {
  return <header className="h-[6.375rem] w-full bg-dark-grey">
    <div className="h-[6rem] w-full px-[2.5rem] flex items-center">
      <div className="w-full grid grid-cols-nav h-[2.813rem]">
        <span className="flex items-center">
          <Logo/>
        </span>
        <span className="h-full flex items-center justify-end pl-[1rem]">
          <Search/>
          <Buttons/>
        </span>
      </div>
    </div>
    <Gradient/>
  </header>;
}
