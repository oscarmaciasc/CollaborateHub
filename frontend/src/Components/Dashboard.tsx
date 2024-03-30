import EnrolledGroups from "./Dasboard/EnrolledGroups";

function Dashboard() {

    const userId = "660247b16a4576d58a44d522"

    return (
      <>
      <div>

        <EnrolledGroups userId={userId}/>
      </div>
      </>
    );
  }
  
  export default Dashboard;