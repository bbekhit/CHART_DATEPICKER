import {
  AWAITING_BITCOIN,
  REJECTED_BITCOIN,
  SUCCESS_BITCOIN,
} from "../actions/types";
const initalState = {
  loading: false,
  data: {
    labels: [],
    datasets: [
      {
        label: "BTC",
        data: [],
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(153, 102, 255, 0.6)",
          "rgba(255, 156, 64, 0.6)",
          "rgba(255, 89, 132, 0.6)",
          "rgba(255, 66, 132, 0.6)",
          "rgba(255, 77, 132, 0.6)",
          "rgba(255, 88, 132, 0.6)",
        ],
      },
    ],
  },
};

const bitcoinReducer = (state = initalState, action) => {
  const { type, payload } = action;

  switch (type) {
    case AWAITING_BITCOIN:
      return {
        ...state,
        loading: true,
      };
    case REJECTED_BITCOIN:
      return {
        ...state,
        loading: false,
      };
    case SUCCESS_BITCOIN:
      return {
        ...state,
        loading: false,
        data: {
          labels: payload.labels,
          datasets: [
            {
              label: "BTC",
              data: payload.data,
              backgroundColor: [
                "rgba(255, 99, 132, 0.6)",
                "rgba(54, 162, 235, 0.6)",
                "rgba(255, 206, 86, 0.6)",
                "rgba(75, 192, 192, 0.6)",
                "rgba(153, 102, 255, 0.6)",
                "rgba(255, 156, 64, 0.6)",
                "rgba(255, 89, 132, 0.6)",
                "rgba(255, 66, 132, 0.6)",
                "rgba(255, 77, 132, 0.6)",
                "rgba(255, 88, 132, 0.6)",
              ],
              borderWidth: 1,
              borderColor: "#777",
              hoverBorderWidth: 3,
              hoverBorderColor: "#000",
            },
          ],
        },
      };
    default:
      return state;
  }
};

export default bitcoinReducer;
