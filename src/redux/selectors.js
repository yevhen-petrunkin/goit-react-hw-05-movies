export const selectUser = state => state.auth.user;
export const selectLoading = state => state.auth.loading;
export const selectError = state => state.auth.error;

export const selectExtraUser = state => state.userExtraData.extraUser;
export const selectExtraLoading = state => state.userExtraData.extraLoading;
export const selectExtraError = state => state.userExtraData.extraError;

export const selectModal = state => state.modal;
