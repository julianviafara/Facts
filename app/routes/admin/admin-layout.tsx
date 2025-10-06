import React from 'react'
import {Outlet} from "react-router";

const AdminLayout = () => {
    return (
        <div>AdminLayout
            <aside>
                <Outlet/>
            </aside>
        </div>
    )
}
export default AdminLayout
