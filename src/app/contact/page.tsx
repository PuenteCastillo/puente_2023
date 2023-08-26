import Image from "next/image";
import Link from "next/link";
import PageSlider from "../components/PageSlider";
import styles from "./page.module.scss";
import Pin from "../../../images/location-pin-solid.svg";
import Phone from "../../../images/phone-solid.svg";
import Email from "../../../images/envelope-solid.svg";

export default function work() {
  return (
    <PageSlider>
      <main id="work_container" className={styles.work}>
        <section>
          <h1> Contact </h1>

          <div className="container">
            <div className="grid grid-cols-2">
              <div className="contentm mt-10">
                <h2>
                  {" "}
                  Let&apos;s connect and <br />
                  build somthing <span>cool</span> together
                </h2>

                <div className="container mt-20 text-white">
                  <div>
                    <Link href="#" className="flex mt-7">
                      <Image src={Email} alt="Email" width={20} height={20} />
                      <p className="ml-3">josepuente2013@gmailc.om</p>
                    </Link>
                    <Link href="#" className="flex mt-7">
                      <Image src={Phone} alt="Phone" width={20} height={20} />
                      <p className="ml-3"> 786-262-2569 </p>
                    </Link>
                    <Link href="#" className="flex mt-7">
                      <Image src={Pin} alt="Pin" width={20} height={20} />
                      <p className="ml-3"> Planet Earth </p>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="form">
                {/* generate a contact form  */}
                <form
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  className="mt-10"
                >
                  <input type="hidden" name="form-name" value="contact" />

                  <div className="flex flex-col">
                    <label htmlFor="name"> Name </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Name"
                      className="mt-3"
                    />
                  </div>

                  <div className="flex flex-col mt-10">
                    <label htmlFor="email" className=" rounded-lg">
                      {" "}
                      Email{" "}
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email"
                      className="mt-3"
                    />
                  </div>

                  <div className="flex flex-col mt-10">
                    <label htmlFor="message" className=" rounded">
                      {" "}
                      Message{" "}
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      placeholder="Message"
                      className="mt-3"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn mt-10"
                    style={{ width: "100%" }}
                  >
                    {" "}
                    Send Message{" "}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </PageSlider>
  );
}
