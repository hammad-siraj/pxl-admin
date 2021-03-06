import styled from "styled-components";

export const Table = styled.div`
  .limiter {
    width: 100%;
    margin: 0 auto;
  }

  .container-table100 {
    width: 100%;
    display: -webkit-box;
    display: -webkit-flex;
    display: -moz-box;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }

  .wrap-table100 {
    width: 960px;
    border-radius: 10px;
    overflow: hidden;
  }

  .table {
    width: 100%;
    display: table;
    margin: 0;
  }

  @media screen and (max-width: 768px) {
    .table {
      display: block;
    }
  }

  .row {
    display: table-row;
    background: #fff;
  }

  .row.header {
    color: black;
  }

  @media screen and (max-width: 768px) {
    .row {
      display: block;
    }

    .row.header {
      padding: 0;
      height: 0px;
    }

    .row.header .cell {
      display: none;
    }

    .row .cell:before {
      font-family: Gilroy-Bold;
      font-size: 12px;
      color: black;
      line-height: 1.2;
      text-transform: uppercase;
      font-weight: unset !important;

      margin-bottom: 13px;
      content: attr(data-title);
      min-width: 98px;
      display: block;
    }
  }

  .cell {
    display: table-cell;
  }

  @media screen and (max-width: 768px) {
    .cell {
      display: block;
    }
  }

  .row .cell {
    font-family: Gilroy-Light;
    font-size: 15px;
    color: #555555;
    line-height: 1.2;
    font-weight: unset !important;
    padding-top: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid #f2f2f2;
  }

  .row.header .cell {
    font-family: Gilroy-Medium;
    font-size: 14px;
    line-height: 1.2;
    font-weight: unset !important;

    padding-top: 19px;
    padding-bottom: 19px;
  }

  .row .cell:nth-child(1) {
    width: 400px;
    padding-left: 40px;
  }

  .row .cell:nth-child(2) {
    width: 160px;
  }

  .row .cell:nth-child(3) {
    width: 250px;
  }

  .row .cell:nth-child(4) {
    width: 190px;
  }

  .table,
  .row {
    width: 100% !important;
  }

  .row:hover {
    background-color: #ffeb85;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    .row {
      border-bottom: 1px solid #f2f2f2;
      padding-bottom: 18px;
      padding-top: 30px;
      padding-right: 15px;
      margin: 0;
    }

    .row .cell {
      border: none;
      padding-left: 30px;
      padding-top: 16px;
      padding-bottom: 16px;
    }
    .row .cell:nth-child(1) {
      padding-left: 30px;
    }

    .row .cell {
      font-family: Gilroy-Medium;
      font-size: 18px;
      color: #555555;
      line-height: 1.2;
      font-weight: unset !important;
    }

    .table,
    .row,
    .cell {
      width: 100% !important;
    }
  }
`;
