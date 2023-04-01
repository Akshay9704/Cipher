import { useState, useEffect } from "react";
import { FaEdit } from "react-icons/fa";
import pic from "../Images/pic.JPG";
import Avatar from "react-avatar-edit";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";

// React Heatmap
const data = [
  { date: "2022-01-01", count: 5 },
  { date: "2022-01-02", count: 8 },
  { date: "2022-01-03", count: 8 },
  { date: "2022-01-04", count: 8 },
  { date: "2022-01-05", count: 8 },
  { date: "2022-01-06", count: 8 },
  { date: "2022-01-07", count: 8 },
  { date: "2022-01-08", count: 8 },
  { date: "2022-01-16", count: 8 },
  { date: "2022-01-23", count: 8 },
  { date: "2022-01-30", count: 8 },
  { date: "2022-01-31", count: 8 },
  { date: "2022-02-01", count: 8 },
  { date: "2022-02-02", count: 8 },
];

const Heatmap = () => {
  return (
    <div className="heatmap">
      <CalendarHeatmap
        startDate={new Date("2022-01-01")}
        endDate={new Date("2022-12-31")}
        values={data}
        showWeekdayLabels={true}
        weekdayLabels={["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]}
        onClick={(value) =>
          alert(`Clicked on value with count: ${value.count}`)
        }
      />
    </div>
  );
};

const Profile = ({ setSigninUser }) => {
  const [picCrop, setPicCrop] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [width, setWidth] = useState();
  const [storeImage, setStoreImage] = useState([]);

  useEffect(() => {
    if (window.innerWidth > width) {
      setIsOpen(true);
    }
  }, []);

  const onCrop = (view) => {
    setPicCrop(view);
  };
  const onClose = () => {
    setPicCrop(null);
  };

  const saveImage = () => {
    setStoreImage([...storeImage, { picCrop }]);
    setIsOpen(false);
  };

  return (
    <>
      <div className="flex justify-end mr-11 mb-3 -z-1">
        <button
          className="bg-orange hover:bg-lgt-orange text-slate-50 p-2 mt-2 rounded-md"
          onClick={() => setSigninUser({})}
        >
          Logout
        </button>
      </div>
      <div className="border 2px w-full h-28 bg-ex-lgt-orange">
        <ul className="flex gap-2">
          <li className="w-20 h-20 mt-3 ml-8 rounded-full">
            <img className="rounded-full relative" src={pic} alt="photo"></img>
            <button
              className="ml-8 -mt-2 -z-1 absolute"
              onClick={() => setIsOpen(!isOpen)}
            >
              <FaEdit />
            </button>
          </li>
          <ul className="flex flex-col">
            <li>
              <h1>Hello,</h1>
            </li>
            <li>
              <h1>User</h1>
            </li>
          </ul>
          <li>
            <h1>*Followers</h1>
          </li>
        </ul>
      </div>
      {isOpen && (
        <div>
          <Avatar width={400} height={300} onClose={onClose} onCrop={onCrop} />
          <button
            className="bg-orange hover:bg-lgt-orange text-slate-50 px-7 py-1 rounded-md mt-3 ml-36"
            onClick={saveImage}
          >
            Save
          </button>
        </div>
      )}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold ml-10 mt-11">About Me</h1>
        </div>
        <button className="bg-orange hover:bg-lgt-orange text-slate-50 px-7 py-1 rounded-md mr-10 mt-11">
          Edit
        </button>
      </div>
      <div className="mx-10">
        <textarea
          className="w-full border-2 h-40 mt-4 text-xl"
          placeholder="Add something about you"
        ></textarea>
      </div>
      <hr className="border-3 mt-5 "></hr>
      <div className="text-xl font-bold mt-8 ml-6">
        <h1>Cipher Map</h1>
        <div className="mr-7 mt-5">{<Heatmap />}</div>
      </div>
    </>
  );
};

export default Profile;
