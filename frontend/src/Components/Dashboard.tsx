import EnrolledGroups from "./Dasboard/EnrolledGroups";
import SearchBar from "../Components/SearchBar/SearchBar";

function Dashboard() {

    const userId = "660f316a941b0b4ee7f4e013"

    return (
      <>
      <div>
        <SearchBar/>
        <EnrolledGroups userId={userId}/>
      </div>
      </>
    );
  }
  
  export default Dashboard;