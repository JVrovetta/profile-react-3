import jvProfile from "./assets/jv-profile.jpeg"
import Profile from "./components/Profile"


function App() {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "100vh", backgroundColor: "#e66465" }}>
      <Profile
        avatar={jvProfile}
        name='João Vitor Rovetta'
        bio='Front-end Developer at Nowhere Inc.'
        email='jv.rovettajunqueira@gmail.com'
        phone='+55 (xx)xxxxx-xxxx'
        githubUrl='https://github.com/JVrovetta'
        linkedinUrl='https://www.linkedin.com/in/joaorovetta/'
        twitterUrl='https://twitter.com/Twitter'
      />
    </div>
  )
}

export default App
