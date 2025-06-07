import { useState } from "react";
import Image from "next/image";

export default function WebinarCard({
  thumbnail,
  id,
  title,
  date,
  shortDesc,
  details,
  speaker,
}) {
  const [showModal, setShowModal] = useState(false);
  const handleViewDetails = () => {
    console.log(`Viewing details for webinar ID: ${id}`);
    setShowModal(true);
  };

  return (
    <>
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 max-w-sm">
        {/* Fixed-size image container */}
        <div className="w-[400px] h-[250px] relative">
          <Image
          src={thumbnail}
          alt="Webinar Thumbnail"
          width={400}
          height={250}
          className="w-full h-[250px] object-cover"
        />
        </div>

        <div className="p-4">
          {/* Title and date */}
          <h2 className="text-xl font-bold mb-1">{title}</h2>
          <p className="text-sm text-gray-500 mb-2">{date}</p>

          {/* Speaker */}
          <h3 className="text-lg text-gray-700 font-semibold mb-2">
            {speaker}
          </h3>

          {/* Short description */}
          <p className="text-gray-600">{shortDesc}</p>

          {/* Button */}
          <button
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            onClick={handleViewDetails}
          >
            View Details
          </button>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-xl max-w-lg w-full relative">
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
              onClick={() => setShowModal(false)}
            >
              ✖
            </button>
            <h3 className="text-2xl font-semibold mb-4">{title}</h3>
            <ul className="space-y-2 text-gray-700">
              <li>
                <strong>📅 Date:</strong> {date}
              </li>
              <li>
                <strong>📍 Place:</strong> {details.place}
              </li>
              <li>
                <strong>🔗 Meeting Link:</strong>{" "}
                <a
                  href={details.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline"
                >
                  {details.link}
                </a>
              </li>
              <li>
                <strong>🎯 Benefits:</strong> {details.benefits}
              </li>
              <li>
                <strong>👥 Who Should Attend:</strong> {details.audience}
              </li>
              <li>
                <strong>✨ Features:</strong> {details.features}
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
