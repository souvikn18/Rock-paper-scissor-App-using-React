import { Link } from "react-router-dom"

const Rule = () => {
    return (
        <>
            <div className="text-center my-[30px]">
                <h2 className="text-4xl font-bold h-[50px] w-[400px] mx-auto ">Rules</h2>
            </div>
            <div className="text-center">
                <p className="text-2xl font-bold h-[50px] w-[400px] mx-auto my-[30px]">The game is being played between <span className="text-green-500">USER</span> and <span className="text-red-500">COMPUTER</span>.<br></br> <span className="pr-[160px]">Rules are as follows:</span></p>
            </div>
            <div className="mx-auto w-[400px] pl-[40px]">
                <ul className="text-xl font-semibold mt-[70px] list-disc list-inside">
                    <li>Rock can beat Scissor</li>
                    <li>Scissor can beat Paper</li>
                    <li>Paper can beat Rock</li>
                    <li>Draw for same selection</li>
                </ul>
            </div>
            <div className="text-center my-[50px] gap-[20px]">
                    <Link to={'/game'}><button className=" h-[50px] w-[200px] rounded-3xl text-xl font-semibold bg-slate-800 hover:bg-orange-200 hover:text-slate-800">Start</button></Link>
            </div>
        </>
    )
}

export default Rule