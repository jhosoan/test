import { Link } from "react-router-dom"
export function Com_Resultado(){
    return(
        <>
          <div className="bg-blue-900 h-15 border-6 border-white ">
            <h1>box 2</h1>
         </div>
         <div className="h-90 bg-blue-800">
            <div className="grid grid-flow-col grid-rows-3 gap-4">
                <div className="row-span-3 ...  w-200 h-120">01
                  <div className="flex ...">
                    <div className="size-14 grow-1... h-9 m-1"></div>
                    <div className="size-14  m-1 w-25 h-9">Técnica</div>
                    <div className="size-14  m-1 w-25 h-9">Apresentação</div>
                  </div>
                  <div className="flex ...">
                    <div className="size-14 grow-1... bg-amber-300 h-9 m-1">01</div>
                     <div className="size-14 bg-red-700 m-1 w-25 h-9">02</div>
                    <div className="size-14 bg-blue-900 m-1 w-25 h-9">03</div>
                  </div>
                  <div className="flex ...">
                    <div className="size-14 grow-1... bg-amber-300 h-9 m-1">01</div>
                     <div className="size-14 bg-red-700 m-1 w-25 h-9">02</div>
                    <div className="size-14 bg-blue-900 m-1 w-25 h-9">03</div>
                  </div>
                  <div className="flex ...">
                    <div className="size-14 grow-1... bg-amber-300 h-9 m-1">01</div>
                     <div className="size-14 bg-red-700 m-1 w-25 h-9">02</div>
                    <div className="size-14 bg-blue-900 m-1 w-25 h-9">03</div>
                  </div>
                  <div className="flex ...">
                    <div className="size-14 grow-1... bg-amber-300 h-9 m-1">01</div>
                     <div className="size-14 bg-red-700 m-1 w-25 h-9">02</div>
                    <div className="size-14 bg-blue-900 m-1 w-25 h-9">03</div>
                  </div>
                  <div className="flex ...">
                    <div className="size-14 grow-1... bg-amber-300 h-9 m-1">01</div>
                     <div className="size-14 bg-red-700 m-1 w-25 h-9">02</div>
                    <div className="size-14 bg-blue-900 m-1 w-25 h-9">03</div>
                  </div>
                  <div className="flex ...">
                    <div className="size-14 grow-1... bg-amber-300 h-9 m-1">01</div>
                     <div className="size-14 bg-red-700 m-1 w-25 h-9">02</div>
                    <div className="size-14 bg-blue-900 m-1 w-25 h-9">03</div>
                  </div>
                </div>
                <div className="col-span-2 ..">
                  <div className="w-45 h-45 " >
                    <h1 className="text-amber-100 text-9xl text-center w-75 h-40" >0.00</h1>
                  </div>
                  

                </div>
                <div className="col-span-2 row-span-2 ... ">
                  <h2 className="text-center text-7xl mr-20">0.00</h2>
                  <div className="flex ...">
                    <div className="size-14 bg-red-700 m-5 w-45 h-13">
                      <h1 className="text-center text-5xl">0.00</h1>
                    </div>
                    <div className="size-14 bg-blue-900 m-5 w-45 h-13">
                      <h1 className="text-center text-5xl">0.00</h1>
                    </div>
                  </div>
                </div>
</div>
         </div>
        <Link to="/Tradicional">Voltar</Link>
        </>
        
        
    )
}