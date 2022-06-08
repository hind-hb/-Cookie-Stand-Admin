

function Main(props) {
    return (
      <div className="mx-auto my-8 bg-[#a1e6c5] w-3/4 text-center rounded-lg">
          <form onSubmit={props.formHandle}>  
        <div>
          <h1 className="p-2 text-xl text-black text-bold">Create Cookie Stand</h1>
        </div>
        <div>
            <label className="flex items-center m-3 text-black justify-content">Location<input type="text" placeholder="Location" name="location" required className="w-3/4 m-3 text-center text-black "/></label>
        </div>
        
        <div className="flex m-3 text-center justify-evenly ">
          <label className="flex-col text-black" >Minimum Customers Per Hour <input type="number" placeholder="" name="min" defaultValue="0" className="w-3/4 mx-2 text-center text-black textAlign: left" /></label>
          <label className="flex-col text-black">Maximum Customers Per Hour <input type="number" placeholder="" name="max" defaultValue="0" className="w-3/4 mx-2 text-center text-black textAlign: left "/></label>
          <label className="flex-col text-black">Average Cookies Per Sales <input type="number" placeholder="" name="avg" defaultValue="0" className="w-3/4 mx-2 text-center text-black textAlign: left "/></label>
          <button type="submit" className="bg-[#7df5bb]  text-black p-5 rounded-lg">Create</button>
  
        </div>
          <div>
              <h1 className="p-2 text-xl text-bold"></h1>
           </div>
  
          </form>
  
          
      </div>
    )
  
  }
  
  export default Main
  
  
  
  
  
          