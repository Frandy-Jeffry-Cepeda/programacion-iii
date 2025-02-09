import backgroundBlood from "../assets/background-blood.jpg";
import { DonationForm } from "./DonationForm";

export const Form = () => {
  return (
    <div
      className="w-full min-h-screen bg-cover bg-center flex items-center justify-center px-4 py-10"
      style={{
        backgroundImage: `url(${backgroundBlood})`,
      }}
    >
      <DonationForm />
    </div>
  );
};
