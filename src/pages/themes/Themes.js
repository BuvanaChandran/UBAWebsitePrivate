import React from "react";
import "./Themes.css";
import BreadcrumbComponent from "../../components/BreadcrumbComponent/BreadcrumbComponent";
import { BsFileEarmarkPdfFill } from "react-icons/bs";

export default function Themes({ themeDetails }) {
  return (
    <>
      <div className="theme">
        <div className="side"></div>
        <div className="content">
          <BreadcrumbComponent
            activeLink={themeDetails.themeBreadCrumb}
          ></BreadcrumbComponent>
          <div className="themes-template">
            <div className="theme-heading">
              <h2>{themeDetails.heading}</h2>
            </div>
            <div className="theme-page-img">
              <img src={themeDetails.themeImage} alt="themes-img" />
            </div>

            <div className="theme-details-content">
              {themeDetails.subContent.map((content, index) => {
                return (
                  <div key={index} className="sub-content-holder">
                    {content.subHeading !== "" && (
                      <div className="heading theme-details-headnig">
                        <h2>{content.subHeading}</h2>
                      </div>
                    )}
                    <p>{content.paragraphContent}</p>
                    {content.themePoints.length > 0 && (
                      <ul className="theme-points">
                        {content.themePoints.map((points, index) => (
                          <li key={index}>{points}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                );
              })}
              {themeDetails.linkPages.length > 0 && (
                <div className="sub-content-holder">
                  <ul className="theme-points">
                    {themeDetails.linkPages.map((link, index) => (
                      <li key={index}>
                        <a
                          href={link.url}
                          target="_blank"
                          rel="noreferrer"
                          className="form-link"
                        >
                          <span className="link-span">{link.content}</span>
                          <BsFileEarmarkPdfFill size="1.25rem" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {themeDetails.tableDetails.length > 0 && (
                <>
                  <div className="heading theme-details-heading" >
                    <h2>Related Subject Expert Groups (SEGs)</h2>
                  </div>
                  <div className="table-container">
                    <table className="theme-details-table">
                      <thead>
                        <tr>
                          {themeDetails.tableHeading.map((heading, index) => (
                            <th key={index}>{heading}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {themeDetails.tableDetails.map((tableRow, index) => {
                          return (
                            <tr key={index}>
                              {tableRow.map((tableColumnData, index) => (
                                <td key={index}>{tableColumnData}</td>
                              ))}
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
