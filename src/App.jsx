import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import LoggedOut from "./components/LoggedOut"
import LogIn from "./components/LogIn"
import Registration from "./components/Registration"
import HomePage from "./components/HomePage"
import Favorites from "./components/Favorites"
import Forum from "./components/Forum"
import MainProfile from "./components/MainProfile"
import ManageAccount from "./components/ManageAccount"
import Support from "./components/Support"
import NewReleases from "./components/NewReleases"
import MainUploads from "./components/MainUploads"
import UserProfile from "./components/UserProfile"
import UserUploads from "./components/UserUploads"
import ReaderUploads from "./components/ReaderUploads"
import ReaderProfile from "./components/ReaderProfile"
import ReaderFavorites from "./components/ReaderFavorites"
import PrivateChat from "./components/PrivateChat"
import OnyxStormChat from "./components/OnyxStormChat"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/profile" element={<MainProfile />} />
        <Route path="/manage-account" element={<ManageAccount />} />
        <Route path="/support" element={<Support />} />
        <Route path="/logout" element={<LoggedOut />} />
        <Route path="/signup" element={<Registration />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/newreleases" element={<NewReleases />} />
        <Route path="/mainuploads" element={<MainUploads />} />
        <Route path="/userprofile" element={<UserProfile />} />
        <Route path="/useruploads" element={<UserUploads />} />
        <Route path="/readeruploads" element={<ReaderUploads />} />
        <Route path="/readerprofile" element={<ReaderProfile />} />
        <Route path="/readerfavorites" element={<ReaderFavorites />} />
        <Route path="/privatechat" element={<PrivateChat />} />
        <Route path="/onyxstormchat" element={<OnyxStormChat />} />
      </Routes>
    </Router>
  )
}

export default App
