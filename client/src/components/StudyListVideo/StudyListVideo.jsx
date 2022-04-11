import React from 'react';

const videoRefer = {id: 1, refer: "JmTAmv9T5e8"}

function StudyListVideo(props) {


    return (
        <iframe
            width="750"
            height="450"
            src={`https://www.youtube.com/embed/${videoRefer.refer}`}
        >
        </iframe>
    );
}

export default StudyListVideo;
