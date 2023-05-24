import GameButton from "./components/GameButton";

function App() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ color: "white" }}>Home</h1>
      <GameButton url="/tictactoe" name="TicTacToe" />
      <br />
      <GameButton url="/2048" name="2048" />
      {/* <br />
      <GameButton url="/quickmath" name="Quick Math" />
      <br />
      <GameButton url="/chainreaction" name="Chain Reaction" /> */}
    </div>
  );
}

export default App;
