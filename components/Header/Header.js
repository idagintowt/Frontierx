import Image from 'next/image'

const Logo = () => {
  return <span className="w-1/3">
    <Image src="/header-logo.png" alt="Logo" width={195} height={23}/>
  </span>
}

const Search = () => {
  return <span className="my-auto w-[41.063rem] h-full relative flex items-center mr-[2.563rem]">
    <span className="absolute left-[1.25rem] mt-1">
      <Image src="/search.svg" alt="Logo" width={17.77} height={17.77}/>
    </span>
    <input className="h-full w-[41.063rem] pl-[3.563rem] bg-grey text-xxs text-light-grey placeholder-light-grey rounded-md focus-within:outline-none" placeholder="Lorem ipsum"/>
  </span>
}

const Buttons = () => {
  return <span className="flex space-x-[2.5rem] h-full">
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
  return <header className="h-[6.375rem] bg-dark-grey">
    <div className="h-[6rem] w-full px-[2.5rem] flex items-center">
      <div className="h-full w-full flex items-center h-[2.813rem]">
        <Logo/>
        <span className="h-full flex items-center justify-between w-3/4">
          <Search/>
          <Buttons/>
        </span>
      </div>
    </div>
    <Gradient/>
  </header>;
}
