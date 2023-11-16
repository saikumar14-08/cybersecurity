import React from "react";
import "./style.css";

function Phishing() {
  return (
    <div className="phishingContainer text-justify">
      <div className="text-4xl text-center font-extrabold dark:text-white">
        Phishing
      </div>
      <br></br>
      <br></br>
      <div>
        <div>
          <h2>
            In phishing attacks, social engineering techniques are employed to
            create a sense of urgency, trust, or fear, prompting individuals to
            act without thorough consideration.
          </h2>

          <p>
            Attackers often leverage knowledge about human behavior to design
            convincing messages that appear legitimate.
          </p>

          <p>
            By understanding the psychology behind social engineering, users can
            better recognize and resist phishing attempts. Education and
            awareness play key roles in mitigating the risks associated with
            these types of cyber threats.
          </p>
        </div>
        <br></br>
        <h1>Types of Phishing</h1>

        <p>
          <strong>Email Phishing:</strong> Attackers send fraudulent emails that
          mimic legitimate organizations, urging recipients to click on links or
          provide sensitive information.
        </p>

        <p>
          <strong>Spear Phishing:</strong> A targeted form of phishing where
          attackers customize messages for specific individuals or
          organizations, often using information gathered from social media or
          other sources.
        </p>

        <p>
          <strong>Vishing (Voice Phishing):</strong> Attackers use phone calls
          to trick individuals into providing sensitive information or
          performing actions, often by posing as a trusted entity.
        </p>

        <p>
          <strong>Smishing (SMS Phishing):</strong> Phishing attacks conducted
          through text messages, where users are prompted to click on malicious
          links or provide information via SMS.
        </p>

        <p>
          <strong>Pharming:</strong> Attackers manipulate DNS settings or use
          other means to redirect users to fraudulent websites without their
          knowledge.
        </p>

        <h2>Phishing and Social Engineering</h2>

        <p>
          Phishing is closely tied to social engineering, a broader strategy
          that exploits human psychology to gain access to sensitive
          information. Social engineering involves manipulating individuals into
          divulging confidential information or performing actions that may
          compromise security.
        </p>
        <br></br>
        <h2>
          Below is the example of Phishing Email drafted by using social
          engineering
        </h2>
        <br></br>
        <div className="shadow-xl shadow-blue-500/40 p-4 rounded-md">
          <p>
            <strong>Subject:</strong> Urgent: Action Required - Account Security
            Breach
          </p>
          <p>Dear Sai Kumar Reddy Boreddy,</p>
          <p>
            We hope this email finds you well. Our security system has detected
            unusual activity related to your account. In order to secure your
            account, we urgently need you to verify your information by clicking
            the link below:
          </p>
          <p>
            <a href="https://www.microsoft.com/en-us/microsoft-365/outlook/log-in">
              Outllok
            </a>
          </p>

          <p>
            Please note that failure to take action within the next 24 hours
            will result in the temporary suspension of your account.
          </p>

          <p>Thank you for your prompt attention to this matter.</p>

          <p>
            Sincerely,<br></br>Admin Team, Southeast Missouri State University.
          </p>
        </div>
        <br></br>
        <div>
          {" "}
          We need to educate ourselves with the required information to find
          whether the mail is phishing mail or not.{" "}
        </div>
        <h1>To identify phishing mails please look into some traits below:</h1>

        <h2>Tips to Identify Spear Phishing:</h2>

        <ul>
          <li>
            <strong>Personalization:</strong> Spear phishing emails often use
            personal information, such as the recipient's full name, to create a
            sense of legitimacy. Be cautious if an email includes personal
            details but seems unexpected or unsolicited.
          </li>
          <li>
            <strong>Urgency and Threats:</strong> Like many phishing attacks,
            spear phishing emails often create a sense of urgency. Be suspicious
            of emails that demand immediate action, especially if the
            consequences involve security breaches or account suspension.
          </li>
          <li>
            <strong>Unusual Sender Email Address:</strong> Check the sender's
            email address carefully. Spear phishing emails may use addresses
            that look similar to, but not exactly like, legitimate company
            addresses.
          </li>
          <li>
            <strong>Unusual Requests:</strong> Be cautious of unexpected
            requests for sensitive information or actions that seem unusual for
            the supposed sender. Verify any unusual requests through a trusted
            communication method.
          </li>
          <li>
            <strong>Verify with the Company:</strong> If you receive an email
            claiming to be from a company, independently verify its legitimacy.
            Contact the company using official contact information, not
            information provided in the suspicious email.
          </li>
          <li>
            <strong>Check Links Carefully:</strong> Hover over links to preview
            the URL before clicking. In spear phishing, attackers may use
            deceptive links that appear legitimate at first glance.
          </li>
          <li>
            <strong>Review the Tone and Language:</strong> Pay attention to the
            tone of the email. Spear phishing emails often use a tone that
            creates a sense of urgency, fear, or trust to manipulate the
            recipient.
          </li>
          <li>
            <strong>Monitor for Unusual Attachments:</strong> Be cautious about
            opening attachments, especially if they are unexpected. Spear
            phishing emails may include malicious attachments to compromise your
            system.
          </li>
        </ul>

        <p>
          By staying informed and vigilant, you can protect yourself from
          falling victim to phishing attempts.
        </p>
      </div>
    </div>
  );
}

export default Phishing;
