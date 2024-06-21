import { useDispatch } from "react-redux";
import { openModal } from "../../context/store/modalSlice";
import Search from "../../components/search/Search";
import Loader from "../../components/Loader/Loader";
import Error from "../../components/error/Error";
import UserModal from "../../components/modal/UserModal";
import { UserProps } from "../../types/user";
import { useState } from "react";

const Home = () => {
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const loadUser = async (userName: string) => {
    setIsLoading(true);
    setError(false);

    const res = await fetch(`https://api.github.com/users/${userName}`);
    const data = await res.json();

    setIsLoading(false);

    if (res.status === 404) {
      setError(true);
      return;
    }

    const { avatarUrl, login, name, location, bio, followers, following } =
      data;

    const userData: UserProps = {
      avatarUrl,
      login,
      name,
      location,
      bio,
      followers,
      following,
    };

    dispatch(openModal(userData));
  };

  return (
    <div>
      <Search loadUser={loadUser} />
      {isLoading && <Loader />}
      {error && <Error />}
      <UserModal />
    </div>
  );
};

export default Home;
