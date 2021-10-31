import React from 'react'
import { List, Datagrid, TextField, DateField, EditButton, DeleteButton } from "react-admin"

const PostList = (props) => {
    return (
        <List {...props}>
            <Datagrid>
                <TextField source="_id"></TextField>
                <TextField source="firstname"></TextField>
                <TextField source="lastname"></TextField>
                <TextField source="role"></TextField>
                <TextField source="image"></TextField>
                <EditButton basePath="/team"></EditButton>
            </Datagrid>
        </List>
    )
}

export default PostList
