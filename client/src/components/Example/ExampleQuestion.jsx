import React from 'react';

function ExampleQuestion(props) {
  
  return (
    <div>
      <h3>Question name</h3>
      <div>
        <input
          type="radio"
          name="tlevel_option"
          id="tlevel_option1"
          value="no"
        />
        <label htmlFor="tlevel_option1">option1</label>
      </div>
      <div>
        <input
          type="radio"
          name="tlevel_option"
          id="tlevel_option2"
          value="no"
        />
        <label htmlFor="tlevel_option2">option2</label>
      </div>
      <div>
        <input
          type="radio"
          name="tlevel_option"
          id="tlevel_option3"
          value="yes"
        />
        <label htmlFor="tlevel_option3">option3</label>
      </div>
      <div>
        <input
          type="radio"
          name="tlevel_option"
          id="tlevel_option4"
          value="no"
        />
        <label htmlFor="tlevel_option4">option4</label>
      </div>
      <br />
      <div>
        <button>Предыдущий вопрос</button>
        <button>Следующий вопрос</button>
      </div>
    </div>
  );
}

export default ExampleQuestion;
