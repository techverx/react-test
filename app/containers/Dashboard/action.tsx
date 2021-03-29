import {
  UPDATE_PROMOCODE,
  SEARCH_PROMOCODE,
  UPDATE_PROMOCODE_SUCCESS,
} from "./constant";

export const updatePromocode = (promocode: any) => {
  return (dispatch: any, getState: any) => {
    const { promoCodes } = getState().dashboardState;
    dispatch({
      type: UPDATE_PROMOCODE,
    });
    const index = promoCodes.findIndex((i: any) => i.id === promocode.id);
    const updatedObject = Object.assign({}, promoCodes[index], {
      active: !promoCodes[index].active,
    });
    const updatedPromoCode = [
      ...promoCodes.slice(0, index),
      updatedObject,
      ...promoCodes.slice(index + 1, updatedObject.length),
    ];
    dispatch({
      type: UPDATE_PROMOCODE_SUCCESS,
      promoCodes: updatedPromoCode,
    });
  };
};

export const searchPromocode = (query: string) => {
  return (dispatch: any, getState: any) => {
    const { originalPromoCodes } = getState().dashboardState;
    const promoCodes = [...originalPromoCodes];
    let filteredCodes = [];
    if (query !== "") {
      filteredCodes = promoCodes.filter((p: any) => p.label.toLowerCase().includes(query.toLocaleLowerCase()));
    } else {
      filteredCodes = originalPromoCodes;
    }
    dispatch({
      type: SEARCH_PROMOCODE,
      promoCodes: [...filteredCodes],
    });
  };
};
