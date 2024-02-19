import "./Certification.css";

const Certification = ({ darkmode }) => {
  const certificates = [
    {
      id: 1,
      title: "Certificate of Internship",
      image:
        "https://res.cloudinary.com/dnitrnzho/image/upload/c_thumb,w_200,g_face/v1708282269/internship_certificate_Bijay-1_rrqimn.webp",
      data: "Certificate of Internship;Frontend Developer @ AgriJod",
    },
    {
      id: 2,
      title: "Certificate of Internship",
      image:
        "https://res.cloudinary.com/dnitrnzho/image/upload/v1708322330/Screenshot_2024-02-19_112808_ad3kvl.webp",
      data: "Qualified for Meta HackerCup R-2; AIR 3534 in Finals;Out of 20k+ participants",
    },
    {
      id: 3,
      title: "Certificate of Achievement",
      image:
        "https://res.cloudinary.com/dnitrnzho/image/upload/c_thumb,w_200,g_face/v1708322181/034d5584-0f83-4c5f-b580-0decb255fb52_dtjlex.webp",
      data: "Semi Finalist at Flipkart Grid 5.0;Qualified both the rounds in Software Development Track",
    },
    {
      id: 4,
      title: "Certificate of Achievement",
      image:
        "https://res.cloudinary.com/dnitrnzho/image/upload/v1708322745/Screenshot_2024-02-19_113506_iyvzad.webp",
      data: "AIR 2 @ Battle of Coders;Out of 7k+ participants",
    },
    {
      id: 5,
      title: "Certificate of Achievement",
      image:
        "https://res.cloudinary.com/dnitrnzho/image/upload/v1708322782/Screenshot_2024-02-19_113559_wfzom9.webp",
      data: "AIR-748 @ Codathon; Out of 10k+ particpants;Largest Inter-NIT coding competition",
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
                  {/* <h1 className="name">{speaker.title}</h1> */}
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
