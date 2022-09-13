import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import { serverUrl } from '../../../serverUrl';
import { useEffect } from 'react';
import { Button } from '@mui/material';
import { display } from '@mui/system';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
 
export default function ShowUsers() {

    const columns = [
    // { field: 'id', headerName: 'ID', width: 70 },
    { field: 'name', headerName: 'Name', width: 230 },
    { field: 'email', headerName: 'Email', width: 230 },
    { field: 'phone', headerName: 'Phone', width: 230 },
    {
      field: 'action',
      width: 330,
      headerName: 'Action',
      sortable: false,
      renderCell: (params) => {
        const onClick = async (e) => {
          e.stopPropagation(); // don't select this row after clicking
          try {
            if (params.row.isBlocked) {
               axios
                .patch(`${serverUrl}/admin/user/unBlock?id=${params.row._id}`)
                .then((res) => {
                  // toast('UnBlocked User ', { autoClose: 800 });
                  setBlocked(!blocked);
                });
            } else {
               axios
                .patch(`${serverUrl}/admin/user/block?id=${params.row._id}`)
                .then((res) => {
                  // toast('Blocked User ', { autoClose: 800 });
                  setBlocked(!blocked);
                });
            }
          } catch (err) {
            console.log(err);
            // toast("Some Error Occured",{autoClose:800})
          }
        };
 
        if (params.row.isBlocked) {
           return (
            <Button
              style={{ zIndex: '0' }}
              variant='outlined'
              color='success'
              onClick={onClick}
            >
              UnBlock
            </Button>
          );
        } else {
           return (
            <Button
              style={{ zIndex: '0' }}
              variant='outlined'
              color='error'
              onClick={onClick}
            >
              Block
            </Button>
          );
        }
      },
    },

    // {
    //   field: 'age',
    //   headerName: 'Age',
    //   type: 'number',
    //   width: 90,
    // },
    // {
    //   field: 'fullName',
    //   headerName: 'Full name',
    //   description: 'This column has a value getter and is not sortable.',
    //   sortable: false,
    //   width: 160,
    //   valueGetter: (params) =>
    //     `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    // },
  ];

  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ];

  const [users, setUsers] = React.useState();
  const [blocked, setBlocked] = useState();

  useEffect(() => {
    axios
      .get(`${serverUrl}/admin/users`, { withCredentials: true })
      .then((res) => {
        // console.log(res.data.users);
        let response = res.data.users;
        setUsers(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [blocked]);

  console.log(users);
  return (
    <div
      style={{
        height: 500,
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      {users && (
        <DataGrid
          rows={users}
          columns={columns}
          pageSize={10}
          getRowId={(row) => row._id}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      )}
    </div>
  );
}
