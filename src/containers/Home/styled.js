import styled from "styled-components";

export const Home = styled.div`
  display: flex;
  margin-top: 50px;
  /* align-items: center; */
  justify-content: center;
  flex-direction: column;

  @media (max-width: 500px) {
    .home {
      flex-direction: column;
      align-items: center;
    }
  }
  .home .detail {
    display: flex;
    flex-direction: column;
  }

  .home .detail .detail-subhead {
    display: flex !important;
    align-items: center;
  }
  .detail-main {
    font-size: 48px;
  }
  .detail-para {
    font-size: 12px;
  }
  .amount {
    display: flex;
    align-items: center;
  }
  .get-started-btn {
    width: 181px;
    height: 55px;
    margin-top: 20px;
    text-decoration: none;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
  }
`;
