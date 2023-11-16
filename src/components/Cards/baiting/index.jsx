import React from "react";
import "./style.css";

function Baiting() {
  return (
    <div className="baitingContainer text-justify">
      <div className="text-4xl text-center font-extrabold dark:text-white">
        Baiting
      </div>
      <section>
        <p>
          Baiting is a social engineering technique in which an attacker lures
          or tempts individuals into a trap to gain unauthorized access to
          sensitive information or systems. The term "baiting" is derived from
          the concept of using something enticing or attractive to lure the
          target, much like a bait used in fishing.
        </p>
        <br></br>
        <strong>Common Baiting Techniques</strong>
        <ul>
          <li>
            <strong>Fake Software Downloads</strong>
            <p>
              Attackers may create enticing software or applications and
              distribute them with the promise of free downloads. However, these
              downloads often contain malware or other malicious elements.
            </p>
          </li>

          <li>
            <strong>Phony Websites</strong>
            <p>
              Baiting attacks often involve the creation of fake websites that
              mimic legitimate ones. Users may be tricked into entering
              sensitive information, such as login credentials or personal
              details, on these deceptive sites.
            </p>
          </li>

          <li>
            <strong>USB Drops</strong>
            <p>
              Attackers may strategically leave infected USB drives in public
              spaces, hoping that someone will find and plug them into their
              computer. Once connected, the malware on the USB drive can
              compromise the system.
            </p>
          </li>

          <li>
            <strong>Freebies or Contests</strong>
            <p>
              Offering freebies, discounts, or the chance to win a prize in
              exchange for personal information can lure individuals into
              providing sensitive data.
            </p>
          </li>

          <li>
            <strong>Phishing Emails with Attachments</strong>
            <p>
              Baiting can occur through phishing emails that entice users to
              open attachments. These attachments may contain malware,
              ransomware, or other malicious payloads.
            </p>
          </li>

          <li>
            <strong>Social Media Lures</strong>
            <p>
              Attackers might use social media platforms to share enticing links
              or content, directing users to malicious websites or encouraging
              them to download compromised files.
            </p>
          </li>
        </ul>
      </section>
      <section>
        <strong>How to Avoid Falling for Baiting</strong>
        <ul>
          <li class="tip">Be Skeptical</li>
          <p>
            {" "}
            Approach unexpected offers or freebies with skepticism. If it sounds
            too good to be true, it probably is.
          </p>
          <li class="tip">Verify Sources</li>
          <p>
            {" "}
            Verify the legitimacy of websites, emails, or downloads before
            interacting with them. Check URLs, sender email addresses, and the
            reputation of the source.
          </p>

          <li class="tip">Think Before Clicking:</li>
          <p>
            Avoid clicking on unfamiliar links or downloading files from
            untrusted sources. Hover over links to preview the URL before
            clicking.
          </p>

          <li class="tip">Use Security Software:</li>
          <p>
            Employ reputable antivirus and anti-malware software to detect and
            block potential threats.
          </p>

          <li class="tip">Educate Employees:</li>
          <p>
            Provide security awareness training to employees to recognize and
            avoid baiting attacks. Emphasize the importance of not plugging in
            unknown USB drives or interacting with suspicious content.
          </p>
        </ul>
      </section>
    </div>
  );
}

export default Baiting;
