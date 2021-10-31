import React from 'react'
import { fetchUtils, Admin, Resource } from "react-admin"
import simpleRestProvider from "ra-data-simple-rest"
import PostList from './adcomponents/PostList'

function AdminPage() {
    return (
        <div>
            <Admin dataProvider={simpleRestProvider("http://localhost:5029", fetchUtils.fetchJson, "Content-Range")}>
                <Resource name="team" list={PostList}></Resource>
            </Admin>
        </div>
    )
}

export default AdminPage
