import Image from 'next/image'

export default function Footer() {
  return <footer className="h-[12.813rem] bg-dark-grey flex justify-center w-full">
    <span className="my-auto mx-auto">
      <Image src="/footer.png" alt="Logo" width={195} height={23}/>
    </span>
  </footer>;
}
