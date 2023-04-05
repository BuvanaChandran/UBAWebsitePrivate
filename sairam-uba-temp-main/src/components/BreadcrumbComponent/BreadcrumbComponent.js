import Breadcrumb from 'react-bootstrap/Breadcrumb'
import './BreadcrumbComponent.css'
import React from 'react'
import {Link} from 'react-router-dom';
import {ImHome} from 'react-icons/im';
export default function BreadcrumbComponent({activeLink}) {

    return (
        <div>
            <div className="bread">
                <Breadcrumb>

                    <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/", className: "home-link" }}>
                        <ImHome className="home-icon" size="1.15rem"/> Home
                    </Breadcrumb.Item>
                    <Breadcrumb.Item active>{activeLink}</Breadcrumb.Item>
                </Breadcrumb>
                <div className="line"></div>
            </div>
        </div>
    );
}
