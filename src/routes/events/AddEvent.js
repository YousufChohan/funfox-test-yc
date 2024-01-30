import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import backgroundImage from "../../assets/images/bg-example.png";
import { VscClose } from "react-icons/vsc";
import axios from "axios";
import Datepicker from "react-tailwindcss-datepicker";
import dayjs from "dayjs";
import TimePicker from "react-time-picker";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";
import { REACT_APP_BASE_URL } from "../../constants/url";

const AddEvent = () => {
  const [eventData, setEventData] = useState({
    name: "",
    overview: "",
    specialFeatures: "",
    venue: "",
    price: "",
    dateStarts: "",
    dateEnds: "",
    dayStarts: "",
    dayEnds: "",
    timeStarts: "",
    timeEnds: "",
    eventPicture: null, // New state for storing the selected image file
  });

  const [value, setValue] = useState({
    startDate: null,
    endDate: null,
  });

  const handleValueChange = (newValue) => {
    if (newValue.startDate) {
      const dayStarts = dayjs(newValue.startDate).format("dddd");
      const dateStarts = dayjs(newValue.startDate).format("MM/DD/YYYY");
      setEventData((prevData) => ({ ...prevData, dayStarts, dateStarts }));
    }

    if (newValue.endDate) {
      const dayEnds = dayjs(newValue.endDate).format("dddd");
      const dateEnds = dayjs(newValue.endDate).format("MM/DD/YYYY");
      setEventData((prevData) => ({ ...prevData, dayEnds, dateEnds }));
    }

    setValue(newValue);
  };

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    if (e.target.name === "eventPicture") {
      // Handle file input separately
      setEventData((prevData) => ({
        ...prevData,
        eventPicture: e.target.files[0],
      }));
    } else {
      // Handle other inputs
      setEventData({ ...eventData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Add form validation logic here

    try {
      const formData = new FormData();
      formData.append("name", eventData.name);
      formData.append("price", eventData.price);
      formData.append("venue", eventData.venue);

      formData.append("overview", eventData.overview);
      formData.append("specialFeatures", eventData.specialFeatures);

      formData.append("dateStarts", eventData.dateStarts);
      formData.append("dateEnds", eventData.dateEnds);

      formData.append("dayStarts", eventData.dayStarts);
      formData.append("dayEnds", eventData.dayEnds);

      formData.append("timeStarts", eventData.timeStarts);
      formData.append("timeEnds", eventData.timeEnds);

      formData.append("creatorName", "Tim");

      formData.append("eventPicture", eventData.eventPicture); // Append the image file

      console.log("eventData added", formData);

      await addEvent(formData); // Call the addEvent function with the FormData
      navigate("/events"); // Go back one step in history
    } catch (error) {
      // Handle error if needed
      console.error("Adding Event faileds:", error);
    }
  };

  const addEvent = async (formData, token) => {
    try {
      const token =
        "eyJhbGciOiJIUzI1NiJ9.eyJfaWQiOiI2NWFmYmZmNDBlYTk0YmUzODQ3MDA2YWMiLCJyb2xlIjoiQ3VzdG9tZXIifQ.WvhZavvK4gWPKYLq0kqUi6cPm1ewwKlUbwtThrB8U_4";
      const response = await axios.post(
        `${REACT_APP_BASE_URL}/event`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            "x-auth-token": token,
          },
        }
      );

      console.log("Adding Event response:", response.data);
      // Additional logic after successful addEvent if needed
    } catch (error) {
      console.error("Adding Event failed:", error);

      // Handle Adding Event error

      throw error;
    }
  };

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Go back one step in history
  };

  return (
    <>
      <div
        className="flex w-100 items-center justify-center bg-cover bg-no-repeat bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <div className="mx-4 my-24 flex flex-col py-6 md:px-6 px-2 rounded-md bg-slate-400 min-w-[260px] max-w-[50rem] relative items-center">
          {/* Use a Link component for navigation */}
          <Link
            to="#"
            className="w-5 h-5 absolute right-3 top-3 cursor-pointer"
            onClick={handleGoBack}
          >
            <VscClose className="w-5 h-5 font-bold" />
          </Link>
          <h2 className="text-center md:text-lg text-md font-bold text-primary">
            Add an Event to BETI
          </h2>

          {/* AddEvent Form */}
          <form
            className="mt-4 flex flex-wrap flex-grow gap-x-8 justify-between"
            onSubmit={handleSubmit}
          >
            {/* Event Name */}
            <div className="mb-4 md:w-[30%] w-full">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Event Name
              </label>
              <input
                type="text"
                name="name"
                value={eventData.name}
                onChange={handleChange}
                className={`appearance-none border ${
                  errors.name ? "border-red-500" : "border-gray-300"
                } rounded-lg w-full py-2 px-3 md:text-base text-xs leading-tight focus:outline-none focus:shadow-outline`}
              />
              {errors.name && (
                <p className="text-red-500 text-xs italic">{errors.name}</p>
              )}
            </div>

            {/* venue */}
            <div className="mb-4 md:w-[30%] w-full">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="venue"
              >
                Venue
              </label>
              <input
                type="text"
                name="venue"
                value={eventData.venue}
                onChange={handleChange}
                className={`appearance-none border ${
                  errors.venue ? "border-red-500" : "border-gray-300"
                } rounded-lg w-full py-2 px-3 md:text-base text-xs leading-tight focus:outline-none focus:shadow-outline`}
              />
              {errors.venue && (
                <p className="text-red-500 text-xs italic">{errors.venue}</p>
              )}
            </div>

            {/* price */}
            <div className="mb-4 md:w-[30%] w-full">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="price"
              >
                Price
              </label>
              <input
                type="number"
                name="price"
                value={eventData.price}
                onChange={handleChange}
                className={`appearance-none border ${
                  errors.price ? "border-red-500" : "border-gray-300"
                } rounded-lg w-full py-2 px-3 md:text-base text-xs leading-tight focus:outline-none focus:shadow-outline`}
              />
              {errors.price && (
                <p className="text-red-500 text-xs italic">{errors.price}</p>
              )}
            </div>

            {/* Overview */}
            <div className="mb-4 w-full">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="overview"
              >
                Overview
              </label>
              <textarea
                type="text"
                name="overview"
                value={eventData.overview}
                onChange={handleChange}
                className={`appearance-none border ${
                  errors.overview ? "border-red-500" : "border-gray-300"
                } rounded-lg w-full py-2 px-3 md:min-h-48 min-h-32 md:text-base text-xs leading-tight focus:outline-none focus:shadow-outline`}
              />
              {errors.overview && (
                <p className="text-red-500 text-xs italic">{errors.overview}</p>
              )}
            </div>

            {/* specialFeatures */}
            <div className="mb-4 w-full">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="specialFeatures"
              >
                Special Features
              </label>
              <textarea
                type="text"
                name="specialFeatures"
                value={eventData.specialFeatures}
                onChange={handleChange}
                className={`appearance-none border ${
                  errors.specialFeatures ? "border-red-500" : "border-gray-300"
                } rounded-lg w-full py-2 px-3 md:text-base text-xs md:min-h-32 min-h-24 leading-tight focus:outline-none focus:shadow-outline`}
              />
              {errors.specialFeatures && (
                <p className="text-red-500 text-xs italic">
                  {errors.specialFeatures}
                </p>
              )}
            </div>

            <div className="mb-4 w-full">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="startdate"
              >
                Event Dates
              </label>
              <Datepicker
                inputClassName="rounded-lg w-full py-2 px-3 md:text-base text-xs leading-tight focus:outline-none focus:shadow-outline"
                separator={"to"}
                useRange={false}
                showFooter={true}
                displayFormat={"MM/DD/YYYY (dddd)"}
                value={value}
                readOnly={true}
                // dateFormat="MM/DD/YYYY (dddd)" // Use "dddd" for day of the week
                onChange={handleValueChange}
                showShortcuts={true}
              />
            </div>

            <div className="w-full flex flex-col md:flex-row items-center justify-around">
              <div className="mb-4 md:w-[30%] w-full">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="starttime"
                >
                  Event Start Time
                </label>
                <div className="relative">
                  <TimePicker
                    onChange={(time) =>
                      setEventData((prevData) => ({
                        ...prevData,
                        timeStarts: time,
                      }))
                    }
                    value={eventData.timeStarts}
                    className="appearance-none border  bg-white rounded-lg w-full py-2 px-3 md:text-base text-sm leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
              </div>

              <div className="mb-4 md:w-[30%] w-full">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="endtime"
                >
                  Event End Time
                </label>
                <div className="relative">
                  <TimePicker
                    onChange={(time) =>
                      setEventData((prevData) => ({
                        ...prevData,
                        timeEnds: time,
                      }))
                    }
                    value={eventData.timeEnds}
                    className="appearance-none border bg-white rounded-lg w-full py-2 px-3 md:text-base text-sm leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
              </div>
            </div>

            <div className="mb-4 w-full">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="eventPicture"
              >
                Event Picture (Landscape 1440 x 820)
              </label>
              <input
                type="file"
                name="eventPicture"
                accept="image/*"
                onChange={handleChange}
                className="bg-white border rounded-lg w-full py-2 px-3 md:text-base text-xs leading-tight focus:outline-none focus:shadow-outline"
              />
              {errors.eventPicture && (
                <p className="text-red-500 text-xs italic">
                  {errors.eventPicture}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-primary text-white w-full self-center mt-3 py-3 px-4 rounded-lg focus:outline-none focus:shadow-outline"
            >
              ADD EVENT
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddEvent;
