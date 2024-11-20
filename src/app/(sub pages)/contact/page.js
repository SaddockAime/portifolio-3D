import Image from "next/image";
import bg from "../../../../public/background/Cozy Vintage Interior With Leather Seating And Industrial Decor.png";
import Form from "@/components/contact/Form";
export const metadata = {
  title: "Contact",
};

export default function Contact() {
  return (
    <>
      <Image
        src={bg}
        alt="Next.js Portfolio website's contact page background image"
        priority
        sizes="100vw"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-40"
      />

      <article className="relative w-full flex flex-col items-center justify-center py-8 sm:py-0 space-y-8">
        <div className="flex flex-col items-center justify-center space-y-6 w-full sm:w-3/4">
          <h1 className="text-accent font-semibold text-center text-4xl capitalize">
            Contact the architect
          </h1>
          <p className="text-center font-light text-sm xs:text-base">
            Feel free to reach out if you have any questions, project inquiries,
            or simply want to discuss your next digital venture. I'm always
            excited to connect with like-minded individuals and explore new
            opportunities. Let's work together to create something amazing!
          </p>
        </div>
        <Form />
      </article>
    </>
  );
}