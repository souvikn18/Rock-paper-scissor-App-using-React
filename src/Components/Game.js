import { useEffect, useState } from "react"
import '../App.css'


const Game = () => {
    const [score, setScore] = useState(0)
    const [userChoice, setUserChoice] = useState('rock')
    const [computerChoice, setComputerChoice] = useState('rock')
    const [result, setResult] = useState('')

    const choices = ['Rock', 'Paper', 'Scissor']

    const handleClick = (choice) => {
        setUserChoice(choice)
        generateComputerChoice()
    }

    const generateComputerChoice = () => {
        const randomChoice = choices[Math.floor(Math.random() * choices.length)]
        setComputerChoice(randomChoice)
    }

    

    useEffect(() => {
        const comboMove = userChoice+computerChoice;
        if (score<=10) {
            if (comboMove==='RockRock' || comboMove==='PaperPaper' || comboMove==='ScissorScissor') {
                setResult('It\'s a draw')
            }
            if (comboMove === 'ScissorPaper' || comboMove === 'RockScissor' || comboMove === 'PaperRock') {
                const updatedScore = score + 1
                setScore(updatedScore)
                setResult('User win!')
            }
            if (comboMove === 'PaperScissor' || comboMove === 'ScissorRock' || comboMove === 'RockPaper') {
                const updatedScore = score - 1
                setScore(updatedScore)
                setResult('Computer win!')   
            }
        }
    }, [userChoice, computerChoice])
    
    return (
        <>
        <div className="text-center">
                <h1 className="text-4xl font-bold h-[50px] w-[400px] mx-auto my-[30px]">Rock Paper Scissor</h1>
                <p className="text-xl font-semibold my-[20px]">Score: {score}</p>

                <div className="flex gap-[30px] justify-center my-[50px]"> 
                    <div className="flex flex-col gap-4">
                        <h3 className="text-2xl font-bold text-green-500">USER</h3>
                        <img className="h-[180px] w-[180px]" src={`../image/${userChoice}.png`} alt="..."/>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h3 className="text-2xl font-bold text-red-500">COMPUTER</h3>
                        <img className="h-[180px] w-[180px]" src={`../image/${computerChoice}.png`} alt="..."/>
                    </div>
                </div>

                <div className="flex gap-[20px] justify-center">
                    {choices.map((choice, index) => {
                        return <button className=" h-[50px] w-[100px] xl:w-[200px] rounded-3xl text-xl font-semibold bg-slate-800 hover:bg-orange-200 hover:text-slate-800" key={index} onClick={() => handleClick(choice)}>{choice}</button>
                    })}
                </div>
                <p className="text-xl font-semibold my-[30px]">Result: {result}</p>
                
        </div>
        </>
    )
}

export default Game