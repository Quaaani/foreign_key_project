import { useSelector } from "react-redux"
import ProfileStudent from "../ProfileStudent/ProfileStudent";
import ProfileTeacher from "../ProfileTeacher/ProfileTeacher";

function Profile () {
  
  const { session } = useSelector((state) => state.sessionReducer)
 
  return (
    <>
    {session?.user_role === 'student' ? <ProfileStudent /> : <ProfileTeacher />}
    </>
  )
}

export default Profile
