import ApiService from "../ApiService";

export const ResetPasswordService = async (payload) => {
  try {
    const response = await ApiService("reset-password", "POST", payload, true);
    return response;
  } catch (error) {
    throw new Error(error);
  }
};

export const ForgotPasswordService = async (payload) => {
  try {
    const response = await ApiService("forgot-password", "POST", payload, true);
    return response;
  } catch (error) {
    throw new Error(error);
  }
};
