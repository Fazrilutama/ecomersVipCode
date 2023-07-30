import { useLogin } from "../hooks/useLogin";

const ProfilePage = () => {
  const username = useLogin();
  return <div>profile</div>;
};

export default ProfilePage;
