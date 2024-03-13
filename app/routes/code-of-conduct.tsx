import { MetaFunction } from "@remix-run/node";

import { BodyText } from "~/components/BodyText";
import { Heading } from "~/components/Heading";
import { Layout } from "~/components/Layout";
import { createMeta } from "~/config";

const tagline = `The Boston TypeScript Club is dedicated to providing a respectful, harassment-free community for everyone. We do not tolerate harassment or bullying of any community member in any form. This does not only extend to members of the Boston TypeScript Club, but to anyone who chooses to become involved in the larger Boston TypeScript Club community of users, developers and integrators through events or interactions.`;

export const meta: MetaFunction = () =>
	createMeta({ page: "Code of Conduct", tagline });

export default function About() {
	return (
		<Layout back title="CoC">
			<Heading level={2}>
				Anti-Harassment and Anti-Bullying Code of Conduct
			</Heading>
			<BodyText>{tagline}</BodyText>
			<BodyText>
				Harassment includes offensive verbal/electronic comments related to
				personal characteristics or choices, sexual images or comments in public
				or online spaces, deliberate intimidation, bullying, stalking,
				following, harassing photography or recording, sustained disruption of
				talks, Slack messages, electronic meetings, physical meetings or other
				events, inappropriate physical contact, or unwelcome sexual attention.
				Participants asked to stop any harassing or bullying behavior are
				expected to comply immediately.
			</BodyText>
			<BodyText>
				If a participant engages in harassing behavior, representatives of the
				community may take reasonable action they deem appropriate, including
				warning the offender, expulsion from any Boston TypeScript Club event,
				or expulsion from mailing lists, Slack groups, discussion boards, and
				other electronic communications channels to resolve the issue. This may
				include expulsion from Boston TypeScript Club membership.
			</BodyText>
			<BodyText>
				If you are being harassed, notice that someone else is being harassed,
				or have any other concerns, please act to intercede or ask for help from
				any member of the Boston TypeScript Club, Slack group admins, website
				admins, or organizers/representatives of any physical events put on
				under the auspices of the Boston TypeScript Club.
			</BodyText>
			<BodyText>—</BodyText>
			<BodyText>
				This Code of Conduct adapted from{" "}
				<a
					href="https://plone.org/foundation/materials/foundation-resolutions/code-of-conduct"
					rel="noreferrer"
					target="_blank"
				>
					https://plone.org/foundation/materials/foundation-resolutions/code-of-conduct
				</a>
			</BodyText>
			<BodyText>
				The content of this Code of Conduct is licensed under a Creative Commons
				Attribution-ShareAlike 4.0 International license.
			</BodyText>
		</Layout>
	);
}
