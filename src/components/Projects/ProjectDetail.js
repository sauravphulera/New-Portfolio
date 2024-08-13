import { useEffect, useState } from "react";

const ProjectDetail = ({
    title, description, url, imageUrl
}) => {
    const [isImageReady, setImageReady] = useState(false);
    useEffect(() => {
        const img = new Image();
        img.onload = () => {
          // when it finishes loading, update the component state
          setImageReady(true);
        }
        img.src = imageUrl; 
    }, [imageUrl])

    return (    

        <div className="project-desc">   
                <h2 className="p-title"> {title }</h2>
                <div className="mt-2">
                    {isImageReady && <img className="project-image" src={imageUrl} alt="Project" />}
                    {!isImageReady && <div>Loading image....</div>}
                </div>
                <div className="mt-2">
                    {description}
                </div>
                <div className="mt-2">
                    <a href={url} rel="noreferrer" target="_blank">Go to Project</a>
                </div>
        </div>
    )
}

export default ProjectDetail;