import React, { useEffect, useRef } from 'react';

const TableauEmbed = ({figID, figName, figSrc, figStatic}) => {
  const vizContainerRef = useRef(null);

  useEffect(() => {
    const vizContainer = vizContainerRef.current;
    const vizElement = vizContainer.getElementsByTagName('object')[0];

    if (vizContainer.offsetWidth > 800) {
      vizElement.style.width = '1000px';
      vizElement.style.height = '827px';
    } else if (vizContainer.offsetWidth > 500) {
      vizElement.style.width = '1000px';
      vizElement.style.height = '827px';
    } else {
      vizElement.style.width = '100%';
      vizElement.style.height = '827px';
    }

    const scriptElement = document.createElement('script');
    scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
    vizElement.parentNode.insertBefore(scriptElement, vizElement);
  }, []);

  return (
    <div
      className="tableauPlaceholder"
      id={figID}
      style={{ position: 'relative' }}
      ref={vizContainerRef}
    >
      <noscript>
        <a href="#">
          <img
            alt="Dashboard 1"
            src={figSrc}
            style={{ border: 'none' }}
          />
        </a>
      </noscript>
      <object
        className="tableauViz"
        style={{ display: 'none' }}
      >
        <param name="host_url" value="https%3A%2F%2Fpublic.tableau.com%2F" />
        <param name="embed_code_version" value="3" />
        <param name="site_root" value="" />
        <param name="name" value={figName} />
        <param name="tabs" value="no" />
        <param name="toolbar" value="yes" />
        <param name="static_image" value={figStatic} />
        <param name="animate_transition" value="yes" />
        <param name="display_static_image" value="yes" />
        <param name="display_spinner" value="yes" />
        <param name="display_overlay" value="yes" />
        <param name="display_count" value="yes" />
        <param name="language" value="en-US" />
        <param name="filter" value="publish=yes" />
      </object>
    </div>
  );
};

export default TableauEmbed;
