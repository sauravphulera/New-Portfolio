import { useEffect, useState } from "react";

const ProjectDetail = ({
    title, description, url, imageUrl
}) => {
    const [isImageReady, setImageReady] = useState(false);
    const imgSrc = imageUrl.startsWith('http') ? imageUrl : `${process.env.PUBLIC_URL || ''}/${imageUrl}`;
    useEffect(() => {
        const img = new Image();
        img.onload = () => setImageReady(true);
        img.src = imgSrc;
    }, [imgSrc])

    return (    

        <div className="project-desc">   
                <h2 className="p-title"> {title }</h2>
                <div className="mt-2">
                    {isImageReady && <img className="project-image" src={imgSrc} alt={title} />}
                    {!isImageReady && <div className="project-image-placeholder">Loading…</div>}
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