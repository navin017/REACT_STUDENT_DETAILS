import { Fragment } from 'react';
import './App.css';
import CreateStudents from './createStudents';
import ShowStudents from './showStudents';
import DeleteStudents from './deleteStudents';
import Updatedetails from './updatedetails';
import Category from './category';
import GetOneDetails from './getOneDetails';

function App() {
  return (
    <Fragment>
      <ShowStudents />
      <CreateStudents />
      <DeleteStudents />
      <Updatedetails />
      {/* <Category/> */}
      {/* <GetOneDetails/> */}
    </Fragment>
  );
}

export default App;
