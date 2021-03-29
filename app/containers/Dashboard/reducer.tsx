import {
  UPDATE_PROMOCODE,
  UPDATE_PROMOCODE_SUCCESS,
  UPDATE_PROMOCODE_FAILED,
  SEARCH_PROMOCODE,
} from "./constant";
const codes = [
  {
    id: 1,
    label: "Sitecostructor.io",
    description: "Description",
    code: "COJW1IJ57O",
    active: true,
  },
  {
    id: 2,
    label: "Appvision.com",
    description: "Description",
    code: "EHCOOKFCG0",
    active: false,
  },
  {
    id: 3,
    label: "Analytics.com",
    description: "Description",
    code: "DL8BIB1LEY",
    active: false,
  },
  {
    id: 4,
    label: "Logotype",
    description: "Description",
    code: "LCFPD3RTZQ",
    active: false,
  },
];

const initialState: any = {
  loading: false,
  promoCodes: codes,
  originalPromoCodes: codes,
};

const reducer = (state: any = initialState, action: any): any => {
  switch (action.type) {
    case UPDATE_PROMOCODE:
      return { ...state, loading: true };
    case UPDATE_PROMOCODE_SUCCESS:
      return {
        ...state,
        loading: false,
        promoCodes: action.promoCodes,
        originalPromoCodes: action.promoCodes
      };
    case UPDATE_PROMOCODE_FAILED:
      return { ...state, loading: false };
    case SEARCH_PROMOCODE:
      return {
        ...state,
        promoCodes: action.promoCodes,
      };
  }

  return state;
};

export default reducer;
