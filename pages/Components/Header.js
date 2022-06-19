function Header ({token}){

    return(
      <header className="h-25 text-3xl bg-[#78c29f]">
      <h1 className="pt-6 pl-5 text-black">{token}</h1> 
  
            <div className="flex flex-row justify-end px-16 m-2">
                <h2 className="mx-2 font-bold ">
                    rudy</h2>
                <h2 className="mx-2 font-bold ">
                    sign out</h2>
                <h2 className="mx-2 font-bold ">
                    overview</h2>
                    </div>
      </header>
    )
    
    }
    export default Header