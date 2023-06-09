import React, { useState } from "react";
import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import UserDetails from "./UserDetails";

const UserInfoTable = () => {
    const [viewUserData, setUserData] = useState({})
    const [data, setData] = useState(
        [{ name: "ezekeil", age: 24, skills: ["java", "python", "React"], department: "Software solutions", roles: "Admin", email: "ejl@yahoo.com", id: 1 }, {
            name: "daniel", age: 26, skills: ["java", "python", "React"], department: "Software solutions", roles: "Manager", email: "ejl@yahoo.com", id: 2
        }, {
            name: "vettori", age: 30, skills: ["java", "python", "React"], department: "Software solutions", roles: "Employee", email: "ejl@yahoo.com", id: 3
        }])
    const [showUser, setShowUser] = useState(false);
    const viewUserDetails = (id) => {
        const selectedUser = data?.filter(d => d.id === id)
        setUserData(selectedUser?.[0])
        setShowUser(true)
    }
    const deleteUser = (id) => {
        const index = data?.findIndex(t => t.id === id);
        const copiedArray = [...data];
        copiedArray.splice(index, 1)
        setData(copiedArray)
    }

    return (
        <>
            <Table>
                <thead>
                    <tr>
                        <th>Employee Name</th>
                        <th>Age</th>
                        <th>Email</th>
                        <th>Department</th>
                        <th>Role</th>
                        <th>Skills</th>
                        <th>Add User</th>
                        <th>Edit</th>
                        <th>view</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.map(t => <tr key={t.id}>
                        <td>{t.name}</td>
                        <td>{t.age}</td>
                        <td>{t.email}</td>
                        <td>{t.department}</td>
                        <td>{t.roles}</td>
                        <td>{t.skills.map(data => <span key={data}>{data}{" "}</span>)}</td>
                        <td><Link to="/adduser">Add user</Link></td>
                        <td><Link to="/adduser">Edit</Link></td>
                        <td>
                            <Button type="button" onClick={() => viewUserDetails(t.id)}>
                                View
                            </Button>
                        </td>
                        <td><Button type="button" onClick={() => deleteUser(t.id)}>Delete</Button></td>
                    </tr>)}
                </tbody>
            </Table >
            <UserDetails viewUserData={viewUserData} showUser={showUser} setShowUser={setShowUser} />
        </>
    )
}

export default UserInfoTable;