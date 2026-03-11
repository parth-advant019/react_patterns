import Accordion from "./components/Accordion/Accordion";
import AccordionItem from "./components/Accordion/AccordionItem";

function App() {
  return (
    <main>
      <section>
        <h2>why work with us?</h2>

        <Accordion className="accordion">
          <Accordion.Item
            id="experience"
            className="accordion-item"
            title="we get 20 years experience"
          >
            <article>
              <p>You can&apos; go wrong with us</p>
              <p>
                we are in the business of planning individual vacation tips for
                more then 20 year
              </p>
            </article>
          </Accordion.Item>

          <Accordion.Item
            id="local-guides"
            className="accordion-item"
            title="we're working with local guides"
          >
            <article>
              <p>We are not doing this along from our office</p>
              <p>
                Instead,we are working with local guides to ensure a safe and
                pleasant vacation.
              </p>
            </article>
          </Accordion.Item>
        </Accordion>
      </section>
    </main>
  );
}

export default App;
