import { useUser } from "@/context/user";

const withUnprotected = (Pages) => {
  return (props) => {
    const router = location
    const user = useUser();
    const { uid } = user;
    if (uid) {
      router.replace("/");
      return <></>;
    }
    return <Pages {...props} />;
  };
};

export default withUnprotected;
