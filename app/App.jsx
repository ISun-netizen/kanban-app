import React from 'react';
import uuid from 'uuid';
import Notes from './components/Notes';

const notes = [
  {
    id: uuid().v4,
    task: 'Learn React'
  },
  {
    id: uuid().v4,
    task: 'Do laundry'
  }
];

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [
        {
          id: uuid.v4(),
          task: 'Learn React'
        },
        {
          id: uuid.v4(),
          task: 'Do laundry'
        }
      ],
      newTask: 'asdg'
    }
  }

 

  render() {
    const { notes, newTask } = this.state;
    const  addTask = (e) => {
      this.setState({
        notes: notes.concat({
          id: uuid.v4(),
          task: newTask
        })
      })
      console.log('sdg');
    }

    return (
      <div>
        <div>
          <label htmlFor='task'>Task name</label>
          <input type='text' id='task' onChange={(e)=>this.setState({newTask:e.target.value})} />
          <button onClick={() => addTask()}>+</button>
        </div>

        <Notes notes = {notes} />
      </div>
    )
  }
} 
