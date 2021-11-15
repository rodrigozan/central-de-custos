import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components

import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import HeaderStats from "components/Headers/HeaderStats.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";

// views

import Products from "views/admin/Products.js";
import ProductDetails from "views/admin/ProductDetails.js";
import ProductCreate from "views/admin/ProductCreate.js";
import Insights from "views/admin/Insights.js";
import Users from "views/admin/Users.js";

export default function Admin() {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-white">
        <AdminNavbar />
        {/* Header */}
        <HeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <Switch>
            <Route path="/admin/centrais" exact component={Products} />
            <Route path="/admin/add-central" exact component={ProductDetails} />
            <Route path="/admin/update-central/:id" exact component={ProductDetails} />
            <Route path="/admin/delete-central/:id" exact component={Products} />

            <Route path="/admin/departamentos" exact component={Products} />
            <Route path="/admin/add-departamento" exact component={Products} />
            <Route path="/admin/update-departamento/:id" exact component={Products} />
            <Route path="/admin/delete-departamento/:id" exact component={Products} />

            <Route path="/admin/cargos" exact component={Products} />
            <Route path="/admin/add-cargo" exact component={Products} />

            <Route path="/admin/usuarios" exact component={Users} />
            <Route path="/admin/add-usuario" exact component={Users} />
            <Route path="/admin/update-usuario/:id" exact component={Users} />
            <Route path="/admin/delete-usuario/:id" exact component={Users} />

            <Route path="/admin/produto/:id" exact component={ProductDetails} />
            <Redirect from="/admin" to="/admin/produtos" />
          </Switch>
          <FooterAdmin />
        </div>
      </div>
    </>
  );
}
