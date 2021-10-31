import React from "react";
import * as S from "./styled";

export default function Table({ data, isLoading }) {
  return (
    <S.Table>
      <div class="limiter">
        <div class="container-table100">
          <div class="wrap-table100">
            <div class="table">
              <div class="row header">
                <div class="cell">Description</div>
                <div class="cell">Source</div>
                <div class="cell">Date</div>
                <div class="cell">Amount</div>
              </div>

              {!isLoading &&
                data.map(({ activity, source, date, amount }) => {
                  return (
                    <div class="row" key={new Date(date).getMilliseconds()}>
                      <div class="cell" data-title="Full Name">
                        {activity}
                        {new Date(date).getTime() >=
                        new Date().getTime() - 30 * 60 * 1000 ? (
                          <span
                            style={{
                              marginLeft: 10,
                              backgroundColor: "#FFEB85",
                              borderRadius: 5,
                            }}
                          >
                            <p
                              style={{
                                display: "inline",
                                fontSize: 14,
                                fontFamily: "Gilroy-Medium",
                                padding: 15,
                                lineHeight: 1.5,
                              }}
                            >
                              just now
                            </p>
                          </span>
                        ) : null}
                      </div>
                      <div class="cell" data-title="Age">
                        {source}
                      </div>
                      <div class="cell" data-title="Job Title">
                        {new Date(date)
                          .toLocaleDateString()
                          .split("/")
                          .join(".") +
                          " " +
                          "at" +
                          " " +
                          new Date(date).toLocaleTimeString().slice(0, 5)}
                      </div>
                      <div class="cell" data-title="Location">
                        223 PXL ({amount} USD)
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </S.Table>
  );
}
