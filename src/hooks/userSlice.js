import createSlice from '@reduxjs/toolkit'

export const getUser = createAsyncThunk('user/getUser', async (params, thunkAPI)=>{
    const currentUser = await useRadioGroup.getUser();
})

const user = createSlice(
    {
        name: 'user',
        initialState: {},
        reducers: {},
        extraReducers: {
            [getUser.fulfilled]: (state, action) =>{
                state.current = action.payload
            },
        }
    }
   
);