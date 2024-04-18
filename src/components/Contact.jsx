import data from "@/data/data";
import { Button } from "@/components/ui/button";

function Contact() {
  const { title, email, textButton } = data.section6;

  return (
    <section
      id={"contact"}
      className="flex flex-col gap-[36px] md:gap-[70px] mt-[90px] lg:mt-[120px]"
    >
      {/* sa */}
      <div className="flex flex-col items-center mt-[20px] p-12 rounded-[60px] bg-radial-gradient">
        <h4 className="text-center text-[24px] md:text-[36px] text-white font-bold h-12 mb-[24px]">
          {title[0]}
        </h4>
        <p className="text-[24px] md:text-[36px] text-white font-thin pt-[12px] border-t">
          {" "}
          {title[1]}
        </p>

        <form
          method="post"
          action={`mailto:${email}?subject=subject&message=message`}
        >
          <Button className="mt-[35px]">{textButton}</Button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
