import CustomButton from "@/components/CustomButton";

function Header() {
  return (
    <head className="flex justify-center w-full h-[80px] absolute top-0">
      <div className="max-w-[1200px] w-full bg-red-100/10 flex justify-between items-center">
        <div className="text-xl font-bold text-white">HYDRA</div>

        <div>
          <CustomButton style={"outlined"} text={"CONTACT US"} />
          <CustomButton style={"primary"} text={"JOIN HYDRA"} />
        </div>
      </div>
    </head>
  );
}

export default Header;
