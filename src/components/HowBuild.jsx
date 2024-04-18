import SectionTitle from "@/components/SectionTitle";
import data from "@/data/data";
import { Button } from "@/components/ui/button";

function HowBuild() {
  const { head, cards } = data.section5;

  return (
    <section className="flex flex-col gap-[36px] md:gap-[70px] mt-[90px] lg:mt-[120px]">
      <SectionTitle headContent={head} />

      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4  gap-4 text-white">
        {cards.map((element, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-radial-gradient rounded-[40px] p-9"
          >
            <div className="bg-gray-500 w-[190px] h-[190px] rounded-full border-8 border-[#2b273a] overflow-hidden">
              <div className="">{element.id}</div>
            </div>

            <div className="flex flex-col items-center mt-[20px]">
              <h4 className="text-center text-[24px] w-[180px]">
                {element.title}
              </h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HowBuild;
