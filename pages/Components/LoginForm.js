export default function LoginForm() {


    return (
        <div>
            <div className="w-2/3 h-56 mx-auto my-10 bg-green-300 rounded-lg   ">
                <form >
                    <div className="flex items-center justify-center flex-col">
                        <label for="username" >User name</label>
                        <br />
                        <input type="text" name="username" id="username" className="flex-grow w-10/12 rounded-sm bg-gray-200" />
                    </div>

                    <div className="flex items-center justify-center flex-col">
                        <label for="password" >Password</label>
                        <br />
                        <input type="password" name="password" id="password" className="flex-grow w-10/12 mt-2 rounded-sm bg-gray-200" />
                    </div>
                    <br />
                    <div className="mx-auto my-1 font-semibold bg-green-500 rounded flex-grow w-10/12  ">
                        <button className="text-xl h-12 " >Log in </button>
                    </div>



                </form>

            </div>

        </div>
    
    )



}