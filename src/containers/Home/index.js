import React from "react";
import { useQuery } from "react-query";
import * as S from "./styled";
import PageLayout from "../PageLayout";
import Table from "../../components/Table";
import { API_URL_DEV, API_URL_PROD } from "../../constants";

const Home = () => {
  const fetchAnalytics = async () => {
    return await fetch(`${API_URL_DEV}/analytics`)
      .then((res) => res.json())
      .catch((err) => console.log(`err`, err));
  };

  const { data, isLoading, isError, isSuccess } =
    useQuery("analytics", fetchAnalytics) || {};

  let { analytics } = data || [];

  return (
    <PageLayout>
      <S.Home>
        <div>
          <h1
            style={{
              fontSize: "4rem",
              marginLeft: 80,
              alignSelf: "flex-start",
            }}
          >
            Earnings
          </h1>
        </div>

        <Table isLoading={isLoading} data={analytics || []} />
        <div
          style={{
            alignSelf: "center",
            backgroundColor: "#EAEAEA",
            border: "1px solid #EAEAEA",
            height: 40,
            borderRadius: 10,
            marginTop: 40,
            cursor: "pointer",
          }}
        >
          <h3
            style={{
              padding: 10,
              fontFamily: "Gilroy-Medium",
            }}
          >
            Load More
          </h3>
        </div>
      </S.Home>
    </PageLayout>
  );
};
export default Home;
