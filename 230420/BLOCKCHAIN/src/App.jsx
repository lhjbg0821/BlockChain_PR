import { useEffect } from "react";

function App() {
  useEffect(() => {
    console.log(window.ethereum);
  }, []);
  return (
    <div className="bg-red-100 min-h-screen flex justify-center items-center">
      Hello, React
    </div>
  );
}

export default App;
