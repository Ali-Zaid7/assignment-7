import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <body className="bg-slate-200">
      <h1 className="justify-center items-center flex mt-56 text-3xl font-bold">What do you want to visit?</h1>
    <div className="flex items-center justify-center  min-h-screen">
      <Button className="-mt-96"><a href="/components/ssr">Server Side Rendering</a></Button>
      <Button className="ml-16 -mt-96"><a href="/components/csr">Client Side Rendering</a></Button>
    </div>
    </body>
  )
}
