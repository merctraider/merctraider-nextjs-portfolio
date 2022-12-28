import Link from 'next/link';

const ProjectCard = ({ title, description, link, image }) => (
  <Link href={link}>
    <div className="block hover:bg-gray-200 rounded-lg p-4">
      <div className="relative">
        <img src={image} alt={title} className="w-full rounded-lg" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="text-4xl font-bold text-white mb-2">{title}</h2>
        </div>
      </div>
      <div className="hidden mt-4 text-gray-700 text-base">
        {description}
      </div>
      <div className="hidden mt-4 text-gray-500 text-sm">
        Learn more
      </div>
    </div>
  </Link>
);

export default ProjectCard;
