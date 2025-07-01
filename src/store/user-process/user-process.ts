import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {NameSpace, AuthorizationStatus, RequestStatus} from '../../const';
import {UserProcess} from '../../types/state';
import {UserData} from '../../types/user-data';
import {checkAuth, login, logout} from '../api-actions';

const initialState: UserProcess = {
  authorizationStatus: AuthorizationStatus.Unknown,
  info: null,
  status: RequestStatus.Idle,
};

function processLoading(state: UserProcess) {
  state.status = RequestStatus.Loading;
}

function processSuccess(state: UserProcess, action: PayloadAction<UserData>) {
  state.info = action.payload;
  state.status = RequestStatus.Success;
  state.authorizationStatus = AuthorizationStatus.Auth;
}

function processFailed(state: UserProcess) {
  state.status = RequestStatus.Failed;
  state.authorizationStatus = AuthorizationStatus.NoAuth;
}

export const userProcess = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(checkAuth.pending, processLoading);
    builder.addCase(checkAuth.fulfilled, processSuccess);
    builder.addCase(checkAuth.rejected, processFailed);
    builder.addCase(login.pending, processLoading);
    builder.addCase(login.fulfilled, processSuccess);
    builder.addCase(login.rejected, processFailed);
    builder.addCase(logout.fulfilled, (state) => {
      state.info = null;
      state.authorizationStatus = AuthorizationStatus.NoAuth;
    });
  }
});
