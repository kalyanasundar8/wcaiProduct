import ApiService from "../ApiService";

export const AdminSignIn = async (payload) => {
    try {
        const response = await ApiService(
            "login",
            "POST",
            payload,
            true
        )
        return response;
    } catch(error) {
        throw new Error("Error while signin", error);
    }
}

export const ResendOtp = async (payload) => {
    try {
        const response = await ApiService(
            "resend-otp",
            "POST",
            payload,
            true
        )
        return response;
    } catch(error) {
        throw new Error(error);
    }
}