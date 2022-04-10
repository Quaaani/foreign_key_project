import { useSelector } from "react-redux"
import ProfileStudent from "../ProfileStudent/ProfileStudent";

function Profile () {
  
  const { session } = useSelector((state) => state.sessionReducer)

  console.log('SESSSSSSSION PROFILE =>',session);
 
  return (
    <>
    {session?.user_role === 'student' ? <ProfileStudent /> : null}
    </>
  )
}

export default Profile
