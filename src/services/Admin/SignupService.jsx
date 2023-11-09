import ApiService from "../ApiService";

export const AdminSignup = async (payload) => {
    try {
        const response = await ApiService(
            "signup-admin",
            "POST",
            payload,
            false
        );
        return response;
    } catch(error) {
        throw new Error("Error while signup", error);
    }
}

export const verifyOtp = async (payload) => {
    try {
        const response = await ApiService(
            "verify-otp",
            "POST",
            payload,
            true
        )
        return response;
    } catch(error) {
        throw new Error("Error while verifying OTP");
    }
}