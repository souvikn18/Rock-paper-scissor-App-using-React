import { Link } from "react-router-dom"


const Home = () => {
    return(
        <>
            <div className="text-center">
                <h1 className="text-4xl font-bold h-[50px] w-[400px] mx-auto my-[30px]">Rock Paper Scissor</h1>
                <div className="flex flex-col justify-center my-[160px] gap-[20px]">
                    <Link to={'/game'}><button className=" h-[50px] w-[200px] rounded-3xl text-xl font-semibold bg-slate-800 hover:bg-orange-200 hover:text-slate-800">Start</button></Link>
                    <Link to={'/rule'}><button className=" h-[50px] w-[200px] rounded-3xl text-xl font-semibold bg-slate-800 hover:bg-orange-200 hover:text-slate-800">Rules</button></Link>
                </div>
                
            </div>
        </>
    )
}

export default Home