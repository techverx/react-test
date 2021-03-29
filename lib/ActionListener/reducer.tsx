const INITIAL_STATE: any = {
  action: null
};

export default (state = INITIAL_STATE, action: any) => {
  return {
    action: { ...action }
  };
};
