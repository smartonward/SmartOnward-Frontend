"use server";

export async function sendEmail(formData: FormData) {
  try {
    const name = formData.get("name");
    const email = formData.get("email");
    const website = formData.get("website");
    const budget = formData.get("budget");
    const details = formData.get("details");
    const selectedFocus = formData.get("selectedFocus");
    const selectedVelocity = formData.get("selectedVelocity");

    // Here you would integrate with an email provider like Resend, SendGrid, or Nodemailer.
    // For now, we simply log the payload and return a success response.
    console.log("Blueprint Request Submitted:", { 
      name, 
      email, 
      website,
      budget,
      details,
      selectedFocus,
      selectedVelocity
    });

    // Simulate a brief network delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return { success: true };
  } catch (error) {
    console.error("Failed to send blueprint request:", error);
    return { success: false, error: "Something went wrong. Please try again later." };
  }
}
