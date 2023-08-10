import ProgressBar from "./ProgressBar";

const HumidityCard = () => {
  return (
    <>
      <div className="border border-black w-[16vw] h-[16vh] rounded-2xl">
        <div className="flex justify-between">
          <h1 className="p-2 font-bold">Humidity</h1>
          <span class="material-icons p-2">water_drop</span>
        </div>
        <div>
          <h1 className=" flex justify-center text-2xl font-bold gap-2">
            82% <span className="font-light">good</span>
          </h1>
        </div>
        <div className="flex gap-2 justify-center">
          <ProgressBar />
          <ProgressBar />
          <ProgressBar />
        </div>
      </div>
    </>
  );
};
export default HumidityCard;
