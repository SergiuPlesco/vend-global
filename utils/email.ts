import Mailjet from "node-mailjet";

const mailjetClient = Mailjet.apiConnect(
  process.env.NEXT_PUBLIC_MAILJET_API_PUBLIC_KEY as string,
  process.env.NEXT_PUBLIC_MAILJET_API_PRIVATE_KEY as string
);

type EmailData = {
  name: string;
  phone: string;
  isEngraving?: boolean;
  message: string;
};

export const sendEmail = async ({
  name,
  phone,
  isEngraving,
  message,
}: EmailData) => {
  const emailData = {
    Messages: [
      {
        From: {
          Email: "plescosergiu@gmail.com",
          Name: "Vend Global",
        },
        To: [{ Email: "painerustica@gmail.com" }],
        Subject: "Client nou",
        TextPart: `Nume: ${name} \nTelefon: ${phone} \nDoresc gravura: ${isEngraving} \nMesaj: ${message}`,
      },
    ],
  };
  try {
    const result = await mailjetClient
      .post("send", { version: "v3.1" })
      .request(emailData);
    return result;
  } catch (error) {
    throw error;
  }
};
