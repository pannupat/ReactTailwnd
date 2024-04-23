import Newcard from "./FlipCard";

const CardFlip = () => {
  return (
    <div className="flex flex-col overflow-auto items-center body h-screen  py-[140px] gap-8 back-card bg-hero ">
      <Newcard />;
    </div>
  );
};
export default CardFlip;
