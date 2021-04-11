import NeshanMap from "./components/NeshanMap";

function App() {
  return (
    <div className="App">
      <NeshanMap
        options={{
          key: 'YOUR_API_KEY',
          center: [35.699739, 51.338097],
          zoom: 13
        }}
      />
    </div>
  );
}

export default App;
