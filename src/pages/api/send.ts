import type { APIRoute } from "astro";
import { Resend } from "resend";

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const GET: APIRoute = async () => {
    //send email
  const { data, error } = await resend.emails.send({
    from: "James <jpilkington332@gmail.com>",
    to: ["delivered@resend.dev"],
    subject: "It works!",
    html: "<p>Hello World!</p>"

  });

  if (error) {
    return new Response(JSON.stringify(error));
  }

  return new Response(JSON.stringify(data));
};