import GuerreroContainer from "./containers/GuerreroContainer"
import TropasContainer from "./containers/TropasContainer"

function App() {
    return (
        <>
            <div className="mb-5">
                <TropasContainer></TropasContainer>
            </div>
        //if rangos != 0 || rangos != null
            <div className="mb-5">
                <GuerreroContainer></GuerreroContainer>
            </div>
        </>
    )

}

export default App
