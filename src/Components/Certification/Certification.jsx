import "./Certification.css";

const Certification = ({ darkmode }) => {
  const certificates = [
    {
      id: 1,
      title: "Certificate of Internship",
      image:
        "https://res.cloudinary.com/dnitrnzho/image/upload/c_thumb,w_200,g_face/v1708282269/internship_certificate_Bijay-1_rrqimn.webp",
      data: "Frontend Developer @ AgriJod;Frontend Developer @ AgriJod",
    },
    {
      id: 2,
      title: "Certificate of Internship",
      image:
        "https://res.cloudinary.com/dnitrnzho/image/upload/c_thumb,w_200,g_face/v1708282269/internship_certificate_Bijay-1_rrqimn.webp",
      data: "Frontend Developer @ AgriJod;Frontend Developer @ AgriJod",
    },
    {
      id: 3,
      title: "Certificate of Internship",
      image:
        "https://res.cloudinary.com/dnitrnzho/image/upload/c_thumb,w_200,g_face/v1708282269/internship_certificate_Bijay-1_rrqimn.webp",
      data: "Frontend Developer @ AgriJod;Frontend Developer @ AgriJod",
    },
  ];
  return (
    <section className="section" id="speakers">
      <div className={`${darkmode ? "about-line" : ""}`}></div>
      <div className="about-me">
        What I<span className="me"> Achieved </span>
      </div>
      <div className="gridContainer">
        {certificates.map((speaker) => {
          const dataList = speaker.data.split(";");
          return (
            <div className="flip_card" key={speaker.id}>
              <div className="flip_card_front">
                <div className="flip_card_inner">
                  <img
                    src={speaker.image}
                    className="speaker_image"
                    alt="certificate"
                  />
                  <h1 className="name">{speaker.title}</h1>
                </div>
              </div>
              <div className="flip_card_back">
                <div className="flip_card_inner">
                  <ul className="data">
                    {dataList.map((data, i) => (
                      <li key={i}>{data.trim()}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Certification;
