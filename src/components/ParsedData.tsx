import type React from "react";

interface ParsedDataProps {
  aadhaarNumber: string;
  address: string;
  dob: string;
  gender: string;
  name: string;
  pincode: string;
}

interface Detail {
  label: string;
  value: string | number;
}

const DetailCard: React.FC<Detail> = ({ label, value }) => {
  return (
    <div>
      <div className="text-sm text-gray-500">{label}</div>
      <div className="mt-1 border-b border-gray-300 pb-1">{value}</div>
    </div>
  );
};

const ParsedData: React.FC<ParsedDataProps> = ({
  aadhaarNumber,
  address,
  dob,
  gender,
  name,
  pincode,
}) => {
  const details: Detail[] = [
    { label: "Aadhaar Number", value: aadhaarNumber },
    { label: "Name on Aadhaar", value: name },
    { label: "Date of Birth", value: dob },
    { label: "Gender", value: gender },
    { label: "Address", value: address },
    { label: "Pincode", value: pincode },
  ];

  return (
    <div className="p-4 mt-4">
      <h2 className="text-lg font-medium mb-4">Parsed Data</h2>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-8">
          {details.slice(0, 2).map((detail) => (
            <DetailCard
              key={detail.label}
              label={detail.label}
              value={detail.value}
            />
          ))}
        </div>
        <div className="grid grid-cols-2 gap-8">
          {details.slice(2, 4).map((detail) => (
            <DetailCard
              key={detail.label}
              label={detail.label}
              value={detail.value}
            />
          ))}
        </div>
        <div className="grid grid-cols-1 gap-8">
          {details.slice(4).map((detail) => (
            <DetailCard
              key={detail.label}
              label={detail.label}
              value={detail.value}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ParsedData;
