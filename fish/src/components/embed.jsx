import React, { useEffect } from "react";
import PropTypes from "prop-types";

const TableauEmbed2 = ({ shareUrl }) => {
  useEffect(() => {
    if (!shareUrl) {
      console.error("A valid Tableau share URL is required.");
      return;
    }

    // Create and append the Tableau JavaScript API script
    const script = document.createElement("script");
    script.src = "https://public.tableau.com/javascripts/api/viz_v1.js";
    script.async = true;
    document.body.appendChild(script);

    // Dynamically adjust the visualization's dimensions
    const divElement = document.getElementById("tableauVizContainer");
    const vizElement = divElement.getElementsByTagName("object")[0];
    if (divElement.offsetWidth > 800) {
      vizElement.style.width = "1000px";
      vizElement.style.height = "827px";
    } else if (divElement.offsetWidth > 500) {
      vizElement.style.width = "1000px";
      vizElement.style.height = "827px";
    } else {
      vizElement.style.width = "100%";
      vizElement.style.height = "1377px";
    }

    return () => {
      // Clean up by removing the script when the component unmounts
      document.body.removeChild(script);
    };
  }, [shareUrl]);

  return (
    <div
      className="tableauPlaceholder"
      id="tableauVizContainer"
      style={{ position: "relative" }}
    >
      <noscript>
        <a href="#">
          <img
            alt="Dashboard"
            src={`${shareUrl.replace("views", "static/images")}/1_rss.png`}
            style={{ border: "none" }}
          />
        </a>
      </noscript>
      <object className="tableauViz" style={{ display: "none" }}>
        <param
          name="host_url"
          value={shareUrl.startsWith("https") ? "https%3A%2F%2F" : "http%3A%2F%2F"}
        />
        <param name="embed_code_version" value="3" />
        <param name="site_root" value="" />
        <param name="name" value={shareUrl.split("views/")[1]} />
        <param name="tabs" value="no" />
        <param name="toolbar" value="yes" />
        <param
          name="static_image"
          value={`${shareUrl.replace("views", "static/images")}/1.png`}
        />
        <param name="animate_transition" value="yes" />
        <param name="display_static_image" value="yes" />
        <param name="display_spinner" value="yes" />
        <param name="display_overlay" value="yes" />
        <param name="display_count" value="yes" />
        <param name="language" value="en-US" />
      </object>
    </div>
  );
};

TableauEmbed2.propTypes = {
  shareUrl: PropTypes.string.isRequired, // Tableau share URL
};

export default TableauEmbed2;