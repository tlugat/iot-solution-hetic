import {useAuth} from "app/hooks/useAuth";

function Home() {
 
  const auth = useAuth();
  
  return (
    <div>
      <h1>Bienvenue {auth.user.name}</h1>
      <button onClick={() => auth.logout()}>Se deconnecter</button>
    </div>
  )
}

export default Home
