import Link from 'next/link';
import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import Gallery from './Gallery';
import { SRLWrapper, useLightbox } from 'simple-react-lightbox'
import Video from './Video';
import { Interweave } from 'interweave';

const ProjectCard = ({ project }) => {
  const { title, featuredImage, information, gallery, video, galleryCols } = project
  const { openLightbox, closeLightbox } = useLightbox()
  console.log(galleryCols)


  return (
    <div className="w-full h-full">
      <Link href='/#projects'>
        <div className='top-2 p-2 sticky'>
          <FaArrowLeft />
        </div>
      </Link>
      <div className='max-w-[1240px] w-full mx-auto p-2 justify-center items-center'>
        <div className='py-6'>
          <h2 className='text-center'>{title}</h2>
        </div>

        <img src={featuredImage} alt={title} className="rounded-xl" />
        <div className="md:flex py-4">
          <div className="md:w-1/2 p-4">
            <h3 className='py-2'>Project Information</h3>

            {Array.isArray(information) ? information.map(
              (i) => (<p className='py-2'><Interweave content={i}/></p>)
            ) : <p className='py-2'><Interweave content={information}/></p>}

          </div>
          <div className="md:w-1/2 p-4">
            <RightColumn project={project} />
          </div>
        </div>

        {video&&(
          <div className='py-4'>
          <Video src={video}/>
          </div>
        )}

        <div className='py-4'>
          {gallery && (
            <SRLWrapper>
              <Gallery 
              images={gallery}
              cols={galleryCols? 3:2} 
              />
            </SRLWrapper>
          )}
        </div>
      </div>

    </div>
  );
};


const RightColumn = ({ project }) => {
  const { title, featuredImage, information, scope, platform, link, gallery, category } = project

  switch (category) {
    case "Web Dev":
      return (
        <>
          <h3 className='py-2'>Scope</h3>
          <p className='py-2'>{scope}</p>
          <h3 className='py-2'>Platform</h3>
          <p className='py-2'>{platform}</p>
          <h3 className='py-2'>Visit Project Website</h3>
          <a href={link} target='_blank' className='py-2 hover:underline text-blue-400'>{link}</a>
        </>
      )

    case "Game Dev":
      return (
        <>
          <h3 className='py-2'>Role</h3>
          <p className='py-2'>{scope}</p>
          <h3 className='py-2'>Platform</h3>
          <p className='py-2'>{platform}</p>
          {link && (<>
            <h3 className='py-2'></h3>
            <div className='w-full'><a href={link} target='_blank' className='bg-blue-400 hover:bg-blue-800 hover:text-white text-black py-2 px-4 rounded text-center'>Download the Game</a></div>
          </>)}

        </>
      )

    default:
      return (
        <>
          <h3 className='py-2'>Scope</h3>
          <p className='py-2'>{scope}</p>
          <h3 className='py-2'>Platform</h3>
          <p className='py-2'>{platform}</p>
          <h3 className='py-2'>Visit Project Website</h3>
          <a href={link} target='_blank' className='py-2 hover:underline text-blue-400'>{link}</a>
        </>
      )

  }



}



export default ProjectCard;
