import React, { useEffect } from "react";
const WildFarmEmbed = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://public.tableau.com/javascripts/api/viz_v1.js";
    script.async = true;
    document.body.appendChild(script);

    const divElement = document.getElementById("viz1732901044257");
    const vizElement = divElement.getElementsByTagName("object")[0];
    if (divElement.offsetWidth > 800) {
      vizElement.style.width = "1200px";
      vizElement.style.height = "827px";
    } else if (divElement.offsetWidth > 500) {
      vizElement.style.width = "1000px";
      vizElement.style.height = "827px";
    } else {
      vizElement.style.width = "100%";
      vizElement.style.height = "1377px";
    }

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className="tableauPlaceholder"
      id="viz1732901044257"
      style={{ position: "relative" }}
    >
      <noscript>
        <a href="#">
          <img
            alt='Wild caught vs farmed salmon (2009 - 2022)'
            src='https://public.tableau.com/static/images/fi/fish_farming/WildvsFarmed/1_rss.png'
            style={{ border: "none" }}
          />
        </a>
      </noscript>
      <object className="tableauViz" style={{ display: "none" }}>
        <param name="host_url" value="https%3A%2F%2Fpublic.tableau.com%2F" />
        <param name="embed_code_version" value="3" />
        <param name="site_root" value="" />
        <param name="name" value="fish_farming/WildvsFarmed" />
        <param name="tabs" value="no" />
        <param name="toolbar" value="yes" />
        <param
          name="static_image"
          value='https://public.tableau.com/static/images/fi/fish_farming/WildvsFarmed/1.png'
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

export default WildFarmEmbed;