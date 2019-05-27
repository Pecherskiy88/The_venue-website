import React from "react";

const Location = () => {
  return (
    <div className="location_wrapper">
      <iframe
        title="unique title"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10165.65236051718!2d30.521856!3d50.4334058!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x783fe299564db0c2!2z0J3QodCaIMKr0J7Qu9C40LzQv9C40LnRgdC60LjQucK7!5e0!3m2!1sru!2sua!4v1558986317446!5m2!1sru!2sua"
        width="100%"
        height="500px"
        frameBorder="0"
        allowFullScreen
      />
      <div className="location_tag">
        <div>Location</div>
      </div>
    </div>
  );
};

export default Location;
