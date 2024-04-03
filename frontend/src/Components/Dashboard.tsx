import EnrolledGroups from "./Dasboard/EnrolledGroups";
import SearchBar from "../Components/SearchBar/SearchBar";
import AddGroup from "./Dasboard/AddGroup";

function Dashboard() {

    const userId = "660247b16a4576d58a44d522"

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