import "./App.css";
import Profile from "./components/Profile";

function AppProfile() {
  const handleEvent = (event) => {
    alert("버튼이 클릭됨!");
  };
  return (
    <>
      <button onClick={handleEvent}>버튼</button>
      <Profile
        image="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=922&q=80"
        name="Loa Kim"
        job="Frontend Developer"
        isNew={true}
      />
      <Profile
        image="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
        name="Bob Yu"
        job="Backend Developer"
      />
    </>
  );
}

export default AppProfile;
