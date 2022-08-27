import { faUpLong, faDownLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useQuery } from "react-query";
import styled from "styled-components";
import { fetchCoinTickers } from "../api";

const PriceBox = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px 40px;
  margin-bottom: 20px;
  border-radius: 10px;
`;

const PriceInfo = styled.div`
  display: flex;
  align-items: center;
  span:first-child {
    font-size: 15px;
    font-weight: 400;
    text-transform: uppercase;
  }
`;

interface PriceProps {
  coinId: string | undefined;
}

interface PriceData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: string;
  last_updated: string;
  quotes: {
    USD: {
      ath_date: string;
      ath_price: number;
      market_cap: number;
      market_cap_change_24h: number;
      percent_change_1h: number;
      percent_change_1y: number;
      percent_change_6h: number;
      percent_change_7d: number;
      percent_change_12h: number;
      percent_change_15m: number;
      percent_change_24h: number;
      percent_change_30d: number;
      percent_change_30m: number;
      percent_from_price_ath: number;
      price: number;
      volume_24h: number;
      volume_24h_change_24h: number;
    };
  };
}

function Price({ coinId }: PriceProps) {
  const { isLoading, data } = useQuery<PriceData>(
    ["tickers", coinId],
    () => fetchCoinTickers(coinId),
    {
      refetchInterval: 5000,
    }
  );

  const ONE_HOUR = data?.quotes.USD.percent_change_1h;

  return (
    <>
      {isLoading ? (
        "Loading...."
      ) : (
        <div>
          {" "}
          <PriceBox>
            <PriceInfo>
              <span>1시간전</span>
            </PriceInfo>
            <PriceInfo>
              <span>{data?.quotes.USD.percent_change_1h}%</span>
            </PriceInfo>
            <PriceInfo>
              <span>
                {data?.quotes.USD.percent_change_1h > 0 ? (
                  <FontAwesomeIcon icon={faUpLong} />
                ) : (
                  <FontAwesomeIcon icon={faDownLong} />
                )}
              </span>
            </PriceInfo>
          </PriceBox>
          <PriceBox>
            <PriceInfo>
              <span>6시간전</span>
            </PriceInfo>
            <PriceInfo>
              <span>{data?.quotes.USD.percent_change_6h}%</span>
            </PriceInfo>
            <PriceInfo>
              <span>
                {data?.quotes.USD.percent_change_6h > 0 ? (
                  <FontAwesomeIcon icon={faUpLong} />
                ) : (
                  <FontAwesomeIcon icon={faDownLong} />
                )}
              </span>
            </PriceInfo>
          </PriceBox>
          <PriceBox>
            <PriceInfo>
              <span>12시간전</span>
            </PriceInfo>
            <PriceInfo>
              <span>{data?.quotes.USD.percent_change_12h}%</span>
            </PriceInfo>
            <PriceInfo>
              <span>
                {data?.quotes.USD.percent_change_12h > 0 ? (
                  <FontAwesomeIcon icon={faUpLong} />
                ) : (
                  <FontAwesomeIcon icon={faDownLong} />
                )}
              </span>
            </PriceInfo>
          </PriceBox>
          <PriceBox>
            <PriceInfo>
              <span>1일전</span>
            </PriceInfo>
            <PriceInfo>
              <span>{data?.quotes.USD.percent_change_24h}%</span>
            </PriceInfo>
            <PriceInfo>
              <span>
                {data?.quotes.USD.percent_change_24h > 0 ? (
                  <FontAwesomeIcon icon={faUpLong} />
                ) : (
                  <FontAwesomeIcon icon={faDownLong} />
                )}
              </span>
            </PriceInfo>
          </PriceBox>
        </div>
      )}
    </>
  );
}

export default Price;
