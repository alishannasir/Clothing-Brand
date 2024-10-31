import Link from "next/link";

export default function Footer() {
  return (
     <div className="w-full h-full p-20 flex flex-row justify-center items-center gap-10 bg-slate-100">
                  <div className="flex flex-col w-full h-full justify-start items-center">
                        <h1 className="text-2xl font-bold font-sans tracking-tight text-center">About us</h1>
                        <h3 className="text-xl font-light font-sans tracking-tight text-center my-5">Overlays Clothing P LTD</h3>
                        <h3 className="text-xl font-light font-sans tracking-tight text-center my-4">Explore to CHANGE</h3>
                        <Link href="/" className="text-lg font-light font-sans tracking-tight text-center underline">Learn More</Link>
                  </div>
                  <div className="w-full h-full flex flex-col">
                        <h1 className="text-2xl font-bold font-sans tracking-tight text-center">Newsletter</h1>
                        <p className="text-xl font-light font-sans tracking-tight text-center">Subscribe to our newsletter to receive updates on new arrivals, special offers and other discount information.</p>
                        <form action="">
                              <input type="email" placeholder="Enter your email" className="w-full h-10 rounded-md border-2 border-gray-300 p-2" />
                              <button type="submit" className="w-full h-10 rounded-md bg-black text-white">Subscribe</button>
                        </form>
                  </div>
                  <div className="w-full h-full flex flex-col">
                        <h1 className="text-2xl font-bold font-sans tracking-tight text-center">Follow us</h1>
                        <h3 className="text-xl font-light font-sans tracking-tight text-center">Stay Touch With Us</h3>
                        <div className="flex flex-row gap-5">
                              <Link href="/" className="text-lg font-light font-sans tracking-tight text-center underline">Facebook</Link>
                              <Link href="/" className="text-lg font-light font-sans tracking-tight text-center underline">Instagram</Link>
                              <Link href="/" className="text-lg font-light font-sans tracking-tight text-center underline">Twitter</Link>
                              <Link href="/" className="text-lg font-light font-sans tracking-tight text-center underline">Youtube</Link>
                        </div>
                  </div>
     </div>
  )
}