const CardCustom = ({ bgColor, iconColor, icon, title, description, link }) => {
  return (
    <div className={`relative w-[220px] h-[320px] lg:w-[250px] lg:h-[290px] xl:w-[280px] xl:h-[270px] 2xl:w-[340px] 2xl:h-[230px] border-${bgColor}`}>
      <div className="rounded-2xl w-full h-full overflow-hidden shadow-lg bg-white p-5 m-10 border-2 flex flex-col justify-between">
        <div>
          <div className="flex items-center mb-4">
            <div
              className={`w-[40px] h-[40px] rounded-2xl absolute -top-5 left-[30%] lg:left-[24%] xl:left-[20%] 2xl:left-[18%] z-5 flex justify-center items-center`}
              style={{ backgroundColor: bgColor }}
            >
              {icon}
            </div>
            <h2 className="font-bold text-pdarkblue text-[12px] mt-2">
              {title}
            </h2>
          </div>
          <p className="text-[#5A5858] text-[12px] text-justify mb-4">
            {description}
          </p>
        </div>
        <a href={link} className="text-porange font-bold underline text-[12px]">
          Selengkapnya
        </a>
      </div>
    </div>
  );
};

export default CardCustom;
