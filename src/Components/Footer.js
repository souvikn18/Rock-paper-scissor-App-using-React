import "../App.css"

const Footer = () => {
    const date = new Date();
    const year= date.getFullYear()
    return (
        <>
        <footer className="fixed bottom-0 h-[50px] w-[100%] bg-zinc-800">
            <p className="text-center pt-2">© Copyright {year}</p>
        </footer>
        </>
    )
}

export default Footer