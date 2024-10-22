import UserProfile from "../features/user/components/UserProfile";
import Header from "@/components/layout/Header";
import { MainContent } from ".";
import { queryMe } from "@/api/queryMe";
import { useQuery } from "@apollo/client";

const UserProfilePage = () => {
  const { data } = useQuery(queryMe, { fetchPolicy: "no-cache" });
  return (
    <>
      <Header />
      <MainContent>
        <UserProfile />
        {/* {data?.me?.plan == "FREE" && <BuyButton />}
        {data?.me?.plan == "PREMIUM" && <SettingButton />} */}
      </MainContent>
    </>
  );
};

export default UserProfilePage;
