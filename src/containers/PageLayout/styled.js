import styled from "styled-components";

export const Wrapper = styled.div`
  .body-grid {
    min-height: 100vh;
    font-family: "popins_light";
  }

  .logo-container {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
  .logo {
    display: flex;
  }
  .logo-circle {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    background-color: #ffeb85;
    border-radius: 50%;
  }
  .logo-title {
    margin-top: 30px;
    margin-left: 10px;

    font-size: 24px;
    line-height: 86.8%;
  }

  .mleft {
    margin-left: 150px;
    @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
      margin-left: 0px;
    }
  }

  .grid-md {
    @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
      display: grid;
      grid-row-gap: 15px;
    }
  }
  .search-input {
    background-color: transparent;
    border: none;
    outline: none;
    margin-left: 15px;
    width: 100%;
    margin-left: 23px;
  }

  .search-input:focus,
  .search-input:hover {
    outline: none;
  }

  .app-bar-border {
    border-bottom: 1px solid #eaeaea;
  }

  .search-input::placeholder {
    font-size: ${({ theme }) => theme.fontSizes.small};
    color: ${({ theme }) => theme.colors.gray4};
    font-family: Gilroy-Bold;
  }
  .text-btn {
    font-size: ${({ theme }) => theme.fontSizes.base};
    margin-left: 5px;
    @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
      font-size: ${({ theme }) => theme.fontSizes.small};
    }
  }
  #bell {
    padding: 0 15px 0 35px;
    margin-right: 15px;
    border-right: 1px solid ${({ theme }) => theme.colors.gray5};
    @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
      margin-right: 5px;
      padding: 0 5px 0 15px;
    }
  }
  .MuiDrawer-paper {
    position: relative;
    background-color: #f5f5f5;
  }
  .MuiTypography-body1 {
    font-family: Gilroy-Bold;
  }
  .trigger {
    img {
      @media screen and (max-width: ${(props) => props.theme.breakpoint.sm}) {
        width: 25px;
      }
    }
    justify-content: space-around;
    width: 100px;
    align-items: center;
  }
  .dp-name {
    color: ${({ theme }) => theme.colors.black2};
    font-size: ${({ theme }) => theme.fontSizes.base};
    font-family: Gilroy-Bold;
    margin-top: 6px;
    @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
      font-size: ${({ theme }) => theme.fontSizes.small};
      margin: 0 5px;
    }
  }
  .dropdown {
    position: relative;
    margin-right: 3rem;
  }
  .MuiAppBar-colorPrimary {
    height: 64px;
    background-color: ${({ theme }) => theme.colors.white};
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
    z-index: 2222;
  }
  .MuiDrawer-paper-desktop .MuiDrawer-paperAnchorDockedLeft {
    width: 270px;
    z-index: 2223;
    margin-top: 69px;
    font-size: ${({ theme }) => theme.fontSizes.small};
    color: ${({ theme }) => theme.colors.gray};
    border-right: 1px solid ${({ theme }) => theme.colors.gray5};
  }
  .MuiDrawer-paperAnchorDockedLeft {
    position: fixed;
  }
  .MuiToolbar-gutters {
    padding: 0 20px 0 20px;
    min-height: 64px !important;
    @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
      padding: 0 20px;
    }
  }

  .MuiListItem-gutters {
    padding: 0;
  }

  .MuiDrawer-paperAnchorDockedLeft {
    border-right: none;
  }
  .MuiContainer-root {
    padding: 0;
  }
  main {
    display: block;
    margin-top: 30px;
    padding: 54px 20px 20px 20px;
    overflow-x: scroll;
    &::-webkit-scrollbar {
      height: 0.1rem;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 0.5rem;
    }
    @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
      margin: 0;
      padding: 20px;
      margin-top: 41px;
    }
  }

  main .MuiContainer-root {
    position: relative;
    @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
      padding-left: 0;
      padding-right: 0;
    }
  }

  .desktop {
    @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
      display: none;
    }
  }
  @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
    .makeStyles-drawerPaperClose-10 {
      width: 0px;
    }
  }
  .MuiSvgIcon-root {
    fill: black;
  }
  .mobile {
    display: none;
    @media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
      display: inline-block;
    }
    .MuiDrawer-paperAnchorLeft {
      top: 62px;
    }
  }
  .dash-head {
    margin: 10px 0 20px 0;
  }
  .title {
    font-size: ${({ theme }) => theme.fontSizes.l};
    @media screen and (max-width: ${(props) => props.theme.breakpoint.sm}) {
      font-size: ${({ theme }) => theme.fontSizes.large};
    }
  }
`;
