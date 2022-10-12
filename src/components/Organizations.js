import TitleRow from "./TitleRow";
import OrganizationCard from "./OrganizationCard";
import { organizationInfo } from "./Images";

function Organizations() {
  return (
    <div className="w-screen py-6">
      <div className="w-full flex flex-col justify-center items-center space-y-4">
        <TitleRow title={"Organizations"} />
        <div className="w-[80%] grid grid-cols-1 grid-rows-3 gap-6 lg:grid-cols-3 lg:grid-rows-1">
          {Object.keys(organizationInfo).map((key, index) => (
            <OrganizationCard key={index} cardInfo={organizationInfo[key]} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Organizations;
