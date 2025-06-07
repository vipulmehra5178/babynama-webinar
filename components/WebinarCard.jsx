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
      <div className="bg-white rounded-2xl shadow-md overflow-hidden transition hover:shadow-xl max-w-sm mx-auto">
        <div className="w-[400px] h-[250px] relative">
          <Image
            src={thumbnail}
            alt="Webinar Thumbnail"
            width={400}
            height={250}
          className="w-full h-[250px] object-cover"
           />
        </div>

        <div className="p-5">
          <h2 className="text-xl font-bold text-blue-900 mb-1">{title}</h2>
          <p className="text-sm text-gray-500 mb-1">📅 {date}</p>
          <p className="text-base font-medium text-gray-700 mb-2">👤 {speaker}</p>
          <p className="text-gray-600 text-sm">{shortDesc}</p>

          <button
            className="mt-4 w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            onClick={handleViewDetails}
          >
            View Details
          </button>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-2xl p-6 max-w-md w-full relative text-gray-800">
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-red-500 text-xl font-bold"
              onClick={() => setShowModal(false)}
            >
              &times;
            </button>

            <h3 className="text-2xl font-semibold text-blue-900 mb-4">{title}</h3>

            <ul className="space-y-3 text-sm">
              <li>
                <span className="font-semibold text-blue-800">📅 Date:</span> {date}
              </li>
              <li>
                <span className="font-semibold text-pink-700">📍 Place:</span> {details.place}
              </li>
              <li>
                <span className="font-semibold text-purple-700">🔗 Meeting Link:</span>{" "}
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
                <span className="font-semibold text-green-700">🎯 Benefits:</span> {details.benefits}
              </li>
              <li>
                <span className="font-semibold text-indigo-700">👥 Who Should Attend:</span> {details.audience}
              </li>
              <li>
                <span className="font-semibold text-yellow-700">✨ Features:</span> {details.features}
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
