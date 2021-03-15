import React from "react";
import { Message } from "react-bulma-components";

const Notification = () => (
  <div className="container toast mt-4">
    <section>
      <Message color="danger has-text-centered">
        <Message.Body>
          <p>
            <strong>HOGE developers</strong>, need your help!
          </p>
          <a href="https://hoge.fun/donate">Donate</a>
        </Message.Body>
      </Message>
    </section>
  </div>
);

export default Notification;
