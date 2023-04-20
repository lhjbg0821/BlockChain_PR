import { useEffect } from "react";

function App() {
  const onClickAccount = async () => {
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      console.log(accounts);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-red-100 min-h-screen flex justify-center items-center">
      <button className="btn-style" onClick={onClickAccount}>
        <img src={`${process.env.PUBLIC_URL}/images/metamask.png`} />
      </button>
    </div>
  );
}

export default App;
