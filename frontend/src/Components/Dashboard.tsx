import EnrolledGroups from "./Dasboard/EnrolledGroups";
import SearchBar from "../Components/SearchBar/SearchBar";
import AuthProvider from "./AuthProvider";
import { useState } from "react";

function Dashboard() {
    const [login, setLogin] = useState(0);
    const userId = "660f316a941b0b4ee7f4e013"

    if(login === 1){
      return (
        <>
          <div>
            <SearchBar/>
            <EnrolledGroups userId={userId}/>
          </div>
        </>
      );
    } 

    return (<AuthProvider logIn = {()=> setLogin(1)} logOut={()=>alert("No registrado")}>
    </AuthProvider>)
  }
  
  export default Dashboard;