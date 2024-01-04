// SkillProgress.js

import React from 'react';
import PropTypes from 'prop-types';

const SkillProgress = ({ skill, progress }) => {
  return (
    <div className="mb-4  w-[300px]">
      <h3 className="text-white text-sm ">{skill}</h3>
      <div className="relative pt-1">
        <div className="flex mb-2 items-center justify-between">
          <div>
            <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-white bg-orange-300">
              {progress}%
            </span>
          </div>
        </div>
        <div className="flex h-2 mb-4 overflow-hidden text-xs bg-white rounded-full">
          <div
            style={{ width: `${progress}%` }}
            className="flex flex-col justify-center text-center text-white whitespace-nowrap bg-orange-300 shadow-none transition-all duration-300"
          ></div>
        </div>
      </div>
    </div>
  );
};

SkillProgress.propTypes = {
  skill: PropTypes.string.isRequired,
  progress: PropTypes.number.isRequired,
};

export default SkillProgress;
