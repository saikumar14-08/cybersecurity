import React from "react";
import "./style.css";

function PreText() {
  return (
    <div className="pretextingContainer text-justify">
      <div className="text-4xl text-center font-extrabold dark:text-white">
        Pretexting
      </div>
      <section>
        <p>
          Pretexting is a social engineering technique where an attacker
          creates a fabricated scenario or pretext to trick individuals into
          divulging sensitive information or performing actions that may
          compromise security. The attacker often impersonates someone
          trustworthy, such as a colleague, service provider, or authority
          figure, to manipulate the target's trust.
        </p>
      </section>

      <section>
        <h2>Common Pretexting Scenarios</h2>
        <ul>
          <li>
            <strong>Tech Support Impersonation</strong>
            <p>
              Attackers may pretend to be technical support personnel, claiming
              to assist with IT issues. They might request login credentials or
              remote access to the target's computer.
            </p>
          </li>

          <li>
            <strong>Vendor or Service Provider Calls</strong>
            <p>
              Impersonating a trusted vendor, attackers may contact individuals
              claiming to require account verification or sensitive information
              for supposed service upgrades or maintenance.
            </p>
          </li>

          <li>
            <strong>Authority Figures Seeking Information</strong>
            <p>
              Attackers may pose as supervisors, executives, or even law
              enforcement, using a false sense of urgency to extract sensitive
              data under the guise of an investigation or official business.
            </p>
          </li>
        </ul>
      </section>

      <section>
        <h2>How to Avoid Falling for Pretexting</h2>
        <ul>
          <li class="tip">
            <strong>Verify Identities</strong>
          </li>
          <p>
            Always verify the identity of individuals making unusual requests.
            Confirm with known contacts through established communication
            channels before sharing sensitive information.
          </p>

          <li class="tip">
            <strong>Question Unusual Requests</strong>
          </li>
          <p>
            Be skeptical of unexpected requests for sensitive information or
            actions. If something seems out of the ordinary, take the time to
            question and validate the legitimacy of the request.
          </p>

          <li class="tip">
            <strong>Use Official Contact Information</strong>
          </li>
          <p>
            When contacted by someone claiming to represent a company or
            organization, use official contact information to verify their
            identity. Avoid using contact details provided in the suspicious
            communication.
          </p>

          <li class="tip">
            <strong>Beware of Urgency</strong>
          </li>
          <p>
            Attackers often create a sense of urgency to pressure individuals
            into quick compliance. Take the time to assess the situation and
            consult with colleagues or superiors if needed.
          </p>

          <li class="tip">
            <strong>Security Awareness Training</strong>
          </li>
          <p>
            Organizations should provide regular security awareness training to
            employees, emphasizing the risks of pretexting and instructing them
            on how to respond to suspicious requests.
          </p>

          <li class="tip">
            <strong>Implement Two-Factor Authentication:</strong>
          </li>
          <p>
            Enable two-factor authentication where possible to add an extra
            layer of security, even if credentials are compromised.
          </p>

          <li class="tip">
            <strong>Report Suspicious Activity</strong>
          </li>
          <p>
            Encourage a culture of reporting suspicious activities. Prompt
            reporting can help organizations take preventive measures and
            educate employees about emerging threats.
          </p>
        </ul>
      </section>

      <section>
        <p>
          Pretexting relies on manipulating trust, and awareness is the first
          line of defense. By staying vigilant, verifying identities, and
          following best practices, individuals can reduce the risk of falling
          victim to pretexting attacks.
        </p>
      </section>
    </div>
  );
}

export default PreText;
