import React from 'react';
import ShowUsers from '../../Components/Admin/showUsers/ShowUsers';
import Sidebar from '../../Components/Admin/Sidebar/Sidebar';

function ViewUsers() {
  return (
    <div>
      <Sidebar>
        <ShowUsers />
      </Sidebar>
    </div>
  );
}

export default ViewUsers;
