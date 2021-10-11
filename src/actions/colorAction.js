import { getColors } from "../services/colorService";
export const SET__COLOR = "SET__COLOR";

const setColor = (colors) => {
  return {
    type: SET__COLOR,
    payload: colors,
  };
};

export const onLoadColor = () => {
  return async (dispatch) => {
    try {
      const { data: colors } = await getColors();
      dispatch(setColor(colors));
    } catch (error) {
      alert("Load color error");
      console.log(error);
    }
  };
};
