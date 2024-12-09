import {createSlice} from '@reduxjs/toolkit';
import Log from '@utility/log';

const initialState: UserReducerProps = {
  token: undefined,
};
const userSlice = createSlice({
  name: 'userReducer',
  initialState: initialState,
  reducers: {
    saveToken: (state, action) => {
      return {
        ...state,
        token: action?.payload,
      };
    },
  },
});

export const {saveToken} = userSlice.actions;

export default userSlice.reducer;
