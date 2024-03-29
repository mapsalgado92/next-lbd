import Head from "next/head"

import {
  Row,
  Col,
  ListGroup,
  Jumbotron,
  Alert,
  Button,
  Spinner,
  Container,
  Fade,
  Image,
} from "react-bootstrap"

const iframeStyles = {
  width: "100%",
  border: "none",
  height: "52vh",
}

export default function Home(props) {
  return (
    <>
      <Head>
        <title>Last Bad Decision | Privacy Policy</title>
        <meta
          name="description"
          content="Craziest Tailored Stag, Hen and Group Weekends in Lisbon"
        />
      </Head>

      <main>
        <Fade appear={true} in={true}>
          <div id="terms-page">
            <section id="terms&conditions" className="text-center mt-4">
              <Container>
                <h1 className="title-text h3 border-bottom mb-0">
                  Privacy Policy
                </h1>
                <iframe src={"/privacy.html"} style={iframeStyles}></iframe>
              </Container>
            </section>
          </div>
        </Fade>
      </main>
    </>
  )
}
