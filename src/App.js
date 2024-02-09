import ProfileCard from "./components/ProfileCard";
import { useEffect, useState } from "react";


function App() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(process.env.REACT_APP_API_URL);
        const data = await response.json();
        console.log(data);
        setUserData(data.results);
      } catch (error) {
        console.log("error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="w-full h-screen bg-indigo-300 flex justify-center items-center ">
      <ProfileCard userData={userData} />
    </div>
  );
}

export default App;
