
## Open Design session (ephemeral — auto-generated for this run)
An `open_design` MCP server is available. Active Open Design
project id: `77fd7966-b7b9-4594-b55a-f3683b88d936`.
Use `create_artifact` on that project to produce the requested
design. Brief:

utilize the .ai-system files, particularly .ai-system/docs/portfolio-revamp.md, .ai-context.md and execute the below

Design the home page for a senior full-stack developer & technical lead's portfolio.
Output as a single named HTML file (visual contract only, no framework code).

Sections: hero (name, tagline "Full-Stack Developer & Technical Lead", availability
badge, primary CTA to Projects, secondary CTA to Experience), stat strip (projects,
technologies, years experience, certificates — values are placeholders driven by
config), tech-stack marquee/pills, featured flagship project card, quick-nav cards
to About / Experience / Projects / Automation / Certificates.

Style: dark/light theme toggle support, confident and technical (not playful-junior),
generous whitespace, one accent color, monospace accents for tech-stack labels only.
Keep all copy in clearly labeled placeholder slots so it maps 1:1 to a config object.

Reuse existing interaction affordances (already implemented as Angular directives, so
design them as visual states/annotations rather than new effects): a typing-effect on
the hero tagline, an animated-border treatment on the primary CTA button, and a subtle
pulsating-effect on the "available for work" badge. Note in the file where each applies.

save output to .ai-system/designs and update .ai-system/designs/README, then execute command update-ai-system.md
