import PropTypes from "prop-types";
import { useRouteMatch } from "react-router-dom";
import { BasicTemplateStyles } from "./BasicTemplateStyles";

/**
 * BasicTemplate
 * * Renders basic template
 * * Passes template style information to BasicTemplateStyles
 */
export const BasicTemplate = ({ site }) => {
  const location = useRouteMatch("/:organization/:route");
  let currentPageData;

  if (!location) {
    // default the current page to the home page
    currentPageData = site?.routes.find((r) => r.name === "home");
  } else {
    currentPageData = site?.routes.find(
      (r) => r.name === location?.params?.route
    );
  }

  if (!currentPageData?.name) return <div>Sorry! This page was not found.</div>;

  return (
    <BasicTemplateStyles styles={site.styles}>
      <div class="hero--sub">
        <div class="container">
          <div class="hero__content">
            <h1 class="hero__title">{location?.params?.route}</h1>
          </div>
        </div>
        <div class="hero-tint"></div>
      </div>
      <div class="content">
        <div class="container">
          <h2>{currentPageData?.layout?.data?.general?.title}</h2>
          <p>{currentPageData?.layout?.data?.general?.description}</p>
        </div>
      </div>
      {currentPageData?.layout?.data?.awards && (
        <div class="content--shaded">
          <div class="container">
            <h2>{currentPageData?.layout?.data?.awards.title}</h2>
            <ul class="image__list">
              {currentPageData?.layout?.data?.awards.list.map((award) => (
                <li>
                  <img src={award?.logo} />
                  <br />
                  {award?.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {currentPageData?.layout?.data?.community && (
        <div class="content">
          <div class="container">
            <h2>{currentPageData?.layout?.data?.community.title}</h2>
            <p>{currentPageData?.layout?.data?.community.description}</p>
            <p>
              <img src={community?.image} />
            </p>
            {currentPageData?.layout?.data?.community.details.map((detail) => (
              <div class="text__list">
                <p class="text__item">
                  <strong>{detail?.title}</strong>
                </p>
                <br />
                <p>{detail?.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </BasicTemplateStyles>
  );
};

BasicTemplate.propTypes = {
  site: PropTypes.any,
};
