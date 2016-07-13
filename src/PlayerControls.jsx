/* jshint esversion:6 */

import React, { PropTypes } from 'react';
import { restartRendering, startRendering, pauseRendering, stopRendering } from './playerActions';

const PlayerControls = () => (
  <div id="playerControls" style={{textAlign: 'center'}}>
    <button 
      key="back"
      onClick={ () => restartRendering() }
    > back
    </button>
    <button 
      key="play"
      onClick={ () => startRendering() }
    > play
    </button>
    <button 
      key="puse"
      onClick={ () => pauseRendering() }
    > pause
    </button>
    <button 
      key="button"
      onClick={ () => stopRendering() }
    > stop
    </button>
  </div>
);

// TodoList.propTypes = {
//   todos: PropTypes.arrayOf(PropTypes.shape({
//     id: PropTypes.number.isRequired,
//     completed: PropTypes.bool.isRequired,
//     text: PropTypes.string.isRequired
//   }).isRequired).isRequired,
//   onTodoClick: PropTypes.func.isRequired
// };

export default PlayerControls;