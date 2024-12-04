import React, { useEffect } from "react";

const FlourishEmbed = ({figureNo}) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://public.flourish.studio/resources/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className="flourish-embed flourish-hierarchy"
      data-src={"visualisation/" + figureNo}
    >
      <noscript>
        <img
          src={"https://public.flourish.studio/visualisation/" + figureNo +"/thumbnail"}
          width="200%"
          alt="hierarchy visualization"
        />
      </noscript>
    </div>
  );
};



export default FlourishEmbed;