import Container from "./components/Container";
import amritalogo from "./images/amritalogo.png";

function App() {
  return (
    <div className="w-full">
      <div className="flex items-baseline w-full mt-[50px] justify-center">
        <img src={amritalogo} width={220} />
        <h2 className="text-xl">GPT</h2>
      </div>

      <Container />
    </div>
  );
}

export default App;
