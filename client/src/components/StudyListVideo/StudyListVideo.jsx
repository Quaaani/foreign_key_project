import React from 'react';

const videoRefer = {id: 1, refer: "JmTAmv9T5e8"}

function StudyListVideo({lesson_video}) {


    return (
        <iframe
            width="750"
            height="450"
            src={`https://www.youtube.com/embed/${lesson_video}`}
        >
        </iframe>
    );
}

export default StudyListVideo;
