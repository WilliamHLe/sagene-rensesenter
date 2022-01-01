import React from "react";
import emailjs from "emailjs-com";

export const SendMail = async (form: HTMLFormElement): Promise<void> => {
  try {
    let res = await emailjs.sendForm(
      "service_1iw45eu",
      "template_s3jks1m",
      form,
      "user_B3Wd8nIbaTPLYpczT378M"
    );

    console.log("success", res.status, res.text);
  } catch (error) {
    console.log("failed", error);
  }
};
