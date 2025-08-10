import { useUser } from "@/context/user";

const withProtected = (Pages) => {
  return (props) => {
    const router = location;
    const user = useUser();
    const { uid } = user;
    if (!uid) {
      router.replace("/login");
      return <></>;
    }
    return <Pages {...props} />;
  };
};

export default withProtected;
