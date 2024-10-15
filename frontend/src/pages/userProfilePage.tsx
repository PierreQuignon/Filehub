import UserProfile from "../components/UserProfile";
import Header from "@/components/layout/header";
import { MainContent } from ".";
import { BuyButton } from "@/components/stripe/BuyButton";
import { SettingButton } from "@/components/stripe/SettingUser";
import { queryMe } from "@/graphql/queryMe";
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
