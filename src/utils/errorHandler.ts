// errorHandler.ts
export const handleError = (error: any): string => {
  if (error.response && error.response.data) {
    // Errors from backend
    const errorMessage =
      error.response.data.message || error.response.data.error;
    if (errorMessage) {
      return errorMessage;
    } else {
      return "Something went wrong. Please try again.";
    }
  } else if (error.request) {
    // Network errors
    console.error("Network error:", error.request);
    return "Network error, please try again";
  } else {
    // Other errors
    console.error("Error:", error.message);
    return error.message;
  }
};
