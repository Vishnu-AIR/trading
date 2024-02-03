import React, { useState } from "react";
import index from "./index.css";
import { IoIosArrowUp } from "react-icons/io";

export const Faqs = () => {
  const questions2 = [1, 2, 3, 4, 5, "j"];
  const [t, sett] = useState(null);
  const questions = [
    {
      "What is the Trading Tiers Course about?":
        "The Trading Tiers Course is a comprehensive program designed to equip traders with the skills and knowledge needed to succeed in the financial markets. It covers a range of topics, including [list key topics]",
    },
    {
      "Who is the course suitable for?":
        "The course is suitable for both beginners and experienced traders looking to enhance their skills. Whether you're new to trading or seeking advanced strategies, our course caters to a diverse range of skill levels.",
    },
    {
      "What makes Trading Tiers different from other trading courses?":
        "Trading Tiers stands out due to its unique blend of [mention unique features such as personalized mentorship, real-world case studies, etc.]. Our focus on practical application sets us apart from traditional courses",
    },
    {
      "How long is the Trading Tiers Course?":
        "The course duration varies, but on average, students can complete it within 2-3 months. The self-paced nature of the course allows flexibility to accommodate individual learning preferences.",
    },
    {
      "Do I need any prior trading experience to enroll?":
        "No prior experience is necessary. The course is structured to cater to beginners, providing a solid foundation and offering advanced insights for experienced traders.",
    },
    {
      "What resources are provided with the course?":
        "Students can access many resources, including video tutorials, reading materials, live webinars, and practical exercises. Additionally, our community forum allows for interaction and discussion among students.",
    },
    {
      "Is there mentorship available for students?":
        "Yes, our course includes mentorship opportunities. Our experienced instructors are dedicated to guiding students through the learning process, providing insights, and addressing individual queries.",
    },
    {
      "How can I access the course materials?":
        "Upon enrollment, students receive login credentials to our online learning platform, where they can access all course materials at their convenience.",
    },
    {
      "Is there ongoing support after completing the course?":
        "Yes, we offer post-course support through continued access to resources and participation in our community. We believe in fostering a supportive environment for ongoing learning and growth.",
    },
    // {
    //   "Is there a premium signal group? What is the price?":
    //     "Yes, the premium discussion group is for our students only.",
    // },
    // {
    //   "What is the fee of the courses?":
    //     "Offline course: Rs. 44,999 + GST,Online course: Rs. 29,999 + GSTPre- recorded course: Rs 11,999+ GST",
    // },
    // {
    //   "Are there instalments available?":
    //     "Yes, only for offline course. Offline instalment is 22500+GST to book seat and other payment 22500+GST in 2nd class.",
    // },
    // {
    //   "Can I attend classes once the course if over?How many doubt sessions are there?":
    //     "Students have lifetime access and can attend all the future sessions. There are unlimited doubt sessions.",
    // },
    // {
    //   "Do you conduct live sessions?":
    //     "Yes, we have a live session after course completion",
    // },
    // {
    //   "Do you have live trading floor?":
    //     "Yes, only our students can access the live trading floors.",
    // },
  ];


  const display = (x, t) => {
    if (x != t) {
      if (t) {
        document.getElementById("a-" + t).classList.remove("active");
        document.getElementById("arrow-" + t).classList.remove("arrow2");
      }
      document.getElementById("a-" + x).classList.add("active");
      document.getElementById("arrow-" + x).classList.add("arrow2");
      sett(x);
    } else {
      document.getElementById("a-" + x).classList.remove("active");
      document.getElementById("arrow-" + x).classList.remove("arrow2");
      sett(null);
    }
  };
  return (
    <>
      <div className="faq">
        <div className="faq-head">
          <span className="fa">
            Frequently Asked<span className="ques">&nbsp; Question</span>
          </span>
        </div>
        <div className="questions">
          {questions.map((question, index) => (
            <>
              {/* Mapping through each question-answer pair */}
              {Object.entries(question).map(([key, value]) => (
                <>
                  <div
                    className="qall"
                    id={"q-" + (index + 1)}
                    onClick={() => {
                      display(index + 1, t);
                    }}
                  ><div className="flex-photo">
                    <div className="circle">{key[9]!=" " ? key[9].toUpperCase() : "A"}</div>
                    <div>{key}</div>
                    </div>
                    <div className="arrow-all" id={"arrow-" + (index + 1)}>
                      <IoIosArrowUp />{" "}
                    </div>
                  </div>
                  <div className="ans" id={"a-" + (index + 1)}>
                    {value}
                  </div>
                </>
              ))}
            </>
          ))}
        </div>
      </div>
    </>
  );
};
