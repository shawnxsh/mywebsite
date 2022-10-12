import TitleRow from "./TitleRow";
import ProjectCard from "./ProjectCard";
import { projectsData } from "./Images";

function ProjectPreview() {
  return (
    <div className="w-screen bg-green-900 py-4">
      <div className="w-full flex flex-col items-center space-y-4">
        <TitleRow title={"Project Preview"} />
        <div className="w-5/6 grid grid-cols-1 justify-items-center gap-y-12 md:grid-cols-2 lg:grid-cols-3">
          {Object.keys(projectsData).map((item, index) => {
            return <ProjectCard key={index} data={projectsData[item]} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default ProjectPreview;
